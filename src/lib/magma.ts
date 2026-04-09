const MAGMA_BASE_URL = 'https://magma.esdm.go.id';
const MAGMA_IJEN_CODE = 'IJE';
const MAGMA_BROMO_CODE = 'BRO';

export type MagmaReportPreview = {
  dateLabel: string;
  period: string;
  mountainName: string;
  level: string;
  author: string;
  authorDate: string;
  summary: string;
  detailUrl: string;
};

export type MagmaReportDetail = {
  title: string;
  level: string;
  author: string;
  locationSummary: string;
  imageUrl?: string;
  visualObservation: string;
  otherNotes?: string;
  climatology?: string;
  recommendations: string[];
  sourceUrl: string;
};

export type MagmaFeed = {
  fetchedAt: string;
  searchUrl: string;
  volcanoCode: string;
  recentReports: MagmaReportPreview[];
  latestReport: MagmaReportDetail | null;
};

type FetchOptions = {
  start: string;
  end: string;
};

function toJakartaDateInput(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === 'year')?.value ?? '';
  const month = parts.find((part) => part.type === 'month')?.value ?? '';
  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  return `${year}-${month}-${day}`;
}

function getDateRange(days = 7): FetchOptions {
  const end = new Date();
  const start = new Date(end);
  start.setDate(start.getDate() - days);
  return { start: toJakartaDateInput(start), end: toJakartaDateInput(end) };
}

function decodeHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&deg;/gi, ' deg')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFirstMatch(html: string, regex: RegExp) {
  const match = html.match(regex);
  return match?.[1] ? decodeHtml(match[1]) : '';
}

function extractRecommendations(html: string) {
  const raw = extractFirstMatch(html, /<h6 class="slim-card-title">Rekomendasi<\/h6>\s*<p>([\s\S]*?)<\/p>/);
  if (!raw) return [];
  return raw.split(/\s(?=\d+\))/).map((item) => item.trim()).filter(Boolean);
}

function getSearchUrl(code: string, { start, end }: FetchOptions) {
  return `${MAGMA_BASE_URL}/v1/gunung-api/laporan/search/q?code=${code}&start=${start}&end=${end}`;
}

async function fetchHtml(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 1800 },
    headers: { 'user-agent': 'JVTO status fetcher' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch MAGMA page: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

function parseSearchResults(html: string): MagmaReportPreview[] {
  const pattern =
    /<p class="timeline-date">([\s\S]*?)<\/p>[\s\S]*?<small>([\s\S]*?)<\/small>[\s\S]*?<p class="timeline-title"><a href="#">([\s\S]*?)<\/a>[\s\S]*?<span class="badge [^"]+">([\s\S]*?)<\/span>[\s\S]*?<p class="timeline-author">Dibuat oleh <span class="tx-primary">([\s\S]*?)<\/span> - ([\s\S]*?)<\/p>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<a href="(https:\/\/magma\.esdm\.go\.id\/v1\/gunung-api\/laporan\/[^"]+)" class="card-link">Lihat Detail<\/a>/g;

  return Array.from(html.matchAll(pattern), (match) => ({
    dateLabel: decodeHtml(match[1] ?? ''),
    period: decodeHtml(match[2] ?? ''),
    mountainName: decodeHtml(match[3] ?? ''),
    level: decodeHtml(match[4] ?? ''),
    author: decodeHtml(match[5] ?? ''),
    authorDate: decodeHtml(match[6] ?? ''),
    summary: decodeHtml(match[7] ?? ''),
    detailUrl: match[8] ?? '',
  })).filter((report) => report.detailUrl);
}

function parseDetailPage(html: string, sourceUrl: string): MagmaReportDetail {
  return {
    title: extractFirstMatch(html, /<h5 class="card-title tx-dark tx-medium mg-b-10">([\s\S]*?)<\/h5>/),
    level: extractFirstMatch(html, /<span class="badge [^"]+">([\s\S]*?)<\/span>/),
    author: extractFirstMatch(html, /<p class="card-subtitle tx-normal mg-b-15">Dibuat oleh,\s*([\s\S]*?)<\/p>/),
    locationSummary: extractFirstMatch(html, /<p class="col-lg-6 pd-0">([\s\S]*?)<\/p>/),
    imageUrl: html.match(/<img class="img-fluid" src="(https:\/\/[^"]+)"/)?.[1],
    visualObservation: extractFirstMatch(html, /<h6 class="slim-card-title">Pengamatan Visual<\/h6>\s*<p>([\s\S]*?)<\/p>/),
    otherNotes: extractFirstMatch(html, /<h6 class="slim-card-title">Keterangan Lainnya<\/h6>\s*<p>([\s\S]*?)<\/p>/),
    climatology: extractFirstMatch(html, /<h6 class="slim-card-title">Klimatologi<\/h6>\s*<p>([\s\S]*?)<\/p>/),
    recommendations: extractRecommendations(html),
    sourceUrl,
  };
}

async function getLatestMagmaFeed(code: string): Promise<MagmaFeed> {
  const range = getDateRange();
  const searchUrl = getSearchUrl(code, range);
  const searchHtml = await fetchHtml(searchUrl);
  const recentReports = parseSearchResults(searchHtml);
  const latestPreview = recentReports[0];

  if (!latestPreview) {
    return {
      fetchedAt: new Date().toISOString(),
      searchUrl,
      volcanoCode: code,
      recentReports: [],
      latestReport: null,
    };
  }

  const detailHtml = await fetchHtml(latestPreview.detailUrl);
  const latestReport = parseDetailPage(detailHtml, latestPreview.detailUrl);

  return {
    fetchedAt: new Date().toISOString(),
    searchUrl,
    volcanoCode: code,
    recentReports,
    latestReport,
  };
}

export async function getLatestIjenMagmaFeed(): Promise<MagmaFeed> {
  return getLatestMagmaFeed(MAGMA_IJEN_CODE);
}

export async function getLatestBromoMagmaFeed(): Promise<MagmaFeed> {
  return getLatestMagmaFeed(MAGMA_BROMO_CODE);
}

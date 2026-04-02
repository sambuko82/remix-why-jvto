export interface Review {
  author: string;
  text: string;
  platform: string;
  rating: number;
  date: string;
}

export interface Credential {
  name: string;
  issuer: string;
  status: string;
  cardImage: string;
  annotations?: ForensicAnnotation[];
}

export interface SafetyMetric {
  label: string;
  value: number; // 0-100
  history: number[]; // For sparklines
}

export interface CrewProfileData {
  archetype: string;
  image: string;
  fullQuote: string;
  expertise: string[];
  credential: Credential;
  safetyMetrics?: SafetyMetric[];
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  reviewer: string;
  tags: string[];
  profile: CrewProfileData;
}

export interface Organization {
  legalName: string;
  brandName?: string;
  name: string;
  url: string;
  foundingDate: string;
  nib: string;
  address: string;
  postalCode?: string;
  mapCid: string;
  description?: string;
  priceRange?: string;
  areaServed?: string[];
  contactPoint?: {
    email: string;
    telephone: string;
    availableLanguages: string[];
  };
  founder: {
    name: string;
    role: string;
    unit: string;
    description?: string;
    image_url?: string;
    sameAs?: string[];
    knowsAbout?: string[];
    memberOf?: {
      name: string;
      subOrganization: string;
    };
  };
}

export interface MedicalProtocol {
  protocolName: string;
  doctor: {
    name: string;
    sip: string;
    affiliation: string;
  };
}

export interface HistoryItem {
  title: string;
  recipient?: string;
  score?: string;
  address?: string;
  edition?: string;
  isbn?: string;
  page?: string;
  quote?: string;
  authors?: string[];
  publisher?: string;
  year?: string;
  annotations?: ForensicAnnotation[];
}

export interface PressItem {
  publisher: string;
  date: string;
  title: string;
  url: string;
  translatedTitle?: string;
  quote?: string;
  author?: string;
  screenshot?: string;
  annotations?: ForensicAnnotation[];
}

export interface Partner {
  name: string;
  status: string;
  description?: string;
  tier?: string;
}

export interface PoliceAuthority {
  badge: string;
  title: string;
  description: string;
  features: string[];
  proof_link: string;
}

export interface OperationalLogic {
  title: string;
  desc: string;
}

export interface ReviewTriangulation {
  platform: string;
  rating: number;
  text: string;
  author: string;
}

export interface HealthProtocolStep {
  step: string;
  title: string;
  desc: string;
}

export interface HealthProtocol {
  title: string;
  subtitle: string;
  policy: string;
  steps: HealthProtocolStep[];
}

export interface HubHero {
  h1: string;
  subhead: string;
  primary_cta: { label: string; url: string };
  secondary_cta: { label: string; url: string };
}

export interface TrustStackCard {
  title: string;
  summary: string;
  link: string;
}

export interface TrustStackSection {
  title: string;
  description: string;
  cards: TrustStackCard[];
}

export interface QuickAnswer {
  q: string;
  a: string;
}

export interface HubContent {
  hero: HubHero;
  intro_paragraphs: string[];
  trust_stack: TrustStackSection;
  quick_answers: QuickAnswer[];
}

export interface ForensicAnnotation {
  id: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  label: string;
  description: string;
}

export interface ProofItem {
  slug: string;
  title: string;
  url: string;
  type?: string;
  hash?: string;
  last_verified?: string;
  category?: string;
  annotations?: ForensicAnnotation[];
}

export interface ProofVault {
  license: ProofItem[];
  legality: ProofItem[];
  accountability: ProofItem[];
  safety: ProofItem[];
  police_safety: ProofItem[];
  credentials: ProofItem[];
  press: ProofItem[];
  history: ProofItem[];
  partners: ProofItem[];
  reputation: ProofItem[];
}

export interface Claim {
  id: string;
  text: string;
  meaning: string;
  evidenceAnchor: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Asset {
  id: string;
  name: string;
  category: string;
  quantity: number;
  status: string;
  last_check: string;
}

export interface VerificationCredential {
  id: string;
  title: string;
  issuer: string;
  type: string;
  status: string;
  expiry: string;
}

export interface PageMetadata {
  route: string;
  title_tag: string;
  meta_description: string;
  h1: string;
  canonical: string;
  schema_type: string;
  schema_profile?: string;
  robots?: string;
}

export interface SSOTData {
  organization: Organization;
  medical: MedicalProtocol;
  history: {
    award2015: HistoryItem;
    book2016: HistoryItem;
  };
  crew: CrewMember[];
  press: PressItem[];
  partners: Partner[];
  police_authority: PoliceAuthority;
  operational_logic: OperationalLogic[];
  reviews_triangulation: ReviewTriangulation[];
  crew_reviews: Record<string, Review[]>;
  health_protocol: HealthProtocol;
  hub_content: HubContent;
  faq: FAQItem[];
  proof_vault: ProofVault;
  claims: Claim[];
  assets_inventory: Asset[];
  verification_credentials: VerificationCredential[];
  pages: Record<string, PageMetadata>;
}

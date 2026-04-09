import type { TourDetailData } from './tours-data';

type CardItem = { title: string; copy: string };
type RhythmItem = { label: string; value: string };
type LinkItem = { title: string; copy: string; href: string };

export type PackageCardBlock = { title: string; copy: string; items: CardItem[] };
export type PackageRhythmBlock = { title: string; copy: string; items: RhythmItem[] };
export type PackageCompareBlock = { title: string; copy: string; items: LinkItem[] };

export type PackageIntelligence = {
  routeFit: PackageCardBlock;
  rhythm: PackageRhythmBlock;
  ijenReadiness?: PackageCardBlock;
  hotelRooming?: PackageCardBlock;
  vehicleCrew?: PackageCardBlock;
  meals?: PackageCardBlock;
  paymentSummary: PackageCardBlock;
  closestAlternative?: PackageCompareBlock;
};

function parseDays(duration: string) {
  const match = duration.match(/(\d+)D/i);
  return match ? Number(match[1]) : 0;
}

function hasTerm(value: string, expression: RegExp) {
  return expression.test(value);
}

function hotel(zone: string, extra?: string): PackageCardBlock {
  return {
    title: 'Hotel and rooming logic',
    copy: 'Guests should understand hotel staging, rooming pattern, and when a property is typical rather than contractually fixed.',
    items: [
      { title: 'Hotel zone', copy: zone },
      {
        title: 'Rooming by pax',
        copy:
          extra ??
          'Even groups normally room by twin or double pattern. Odd-number groups commonly move into one extra bed arrangement unless a separate room supplement is written into the booking.',
      },
      {
        title: 'What to promise publicly',
        copy: 'Promise the zone and operating logic first. Exact hotel brand should only be treated as fixed when it is confirmed in the final voucher.',
      },
    ],
  };
}

function vehicle(routeCopy: string): PackageCardBlock {
  return {
    title: 'Vehicle and crew handling',
    copy: 'Vehicle and crew clarity makes the route feel like a managed private system, not just transport plus stops.',
    items: [
      {
        title: 'Vehicle by pax',
        copy:
          'Standard handling is one MPV for 2 to 3 guests, one Hiace for 4 to 9 guests, and larger combinations as the group expands. Bromo routes also add private jeep handling.',
      },
      {
        title: 'Crew by route',
        copy:
          'Smaller groups commonly use a driver-guide model. Larger groups move into driver plus escort-guide handling, with local site guides where needed.',
      },
      { title: 'Why it matters here', copy: routeCopy },
    ],
  };
}

function meals(routeCopy: string): PackageCardBlock {
  return {
    title: 'Meals reality',
    copy: 'Meals should be explained as route-specific support, not assumed from the calendar length alone.',
    items: [
      { title: 'Safe baseline', copy: 'Bottled water and hotel breakfast are the safest baseline assumptions on overnight routes.' },
      { title: 'Route-specific pattern', copy: routeCopy },
      { title: 'What not to assume', copy: 'Extra hosted meals should not be assumed unless the package page and final voucher state them clearly.' },
    ],
  };
}

const paymentSummary: PackageCardBlock = {
  title: 'Booking and payment snapshot',
  copy: 'The route stays package-first: shortlist the route, confirm the fit, complete checkout, then wait for the official voucher or invoice that locks the booking.',
  items: [
    { title: 'Standard deposit', copy: 'The standard deposit is 20% of the total package value.' },
    { title: 'Near departure', copy: 'If Day 1 is close, JVTO may require up to 100% payment at checkout.' },
    { title: 'Balance deadlines', copy: 'Card balance is usually due 5 days before Day 1. Transfer or Wise balance is usually due 3 days before Day 1.' },
    { title: 'Final authority', copy: 'The official e-voucher or invoice remains the final written authority for the confirmed booking.' },
  ],
};

function buildGenericIjenReadiness(tour: TourDetailData): PackageCardBlock {
  return {
    title: 'Ijen readiness comes before date selection',
    copy: 'If the route includes Ijen, screening, sulfur conditions, night timing, and access variability should stay visible before payment.',
    items: [
      { title: 'Medical screening is part of the route', copy: tour.healthRequirements[0] ?? 'JVTO treats medical screening as a route-control step, not a decorative formality.' },
      { title: 'Blue fire is never a promise', copy: 'Visibility and access conditions can change. The route should be bought responsibly, not as a guaranteed photo outcome.' },
      { title: 'Night timing matters', copy: tour.planningNotes[0] ?? 'Late-night or pre-dawn timing is part of Ijen reality and should be assessed before checkout.' },
    ],
  };
}

function tourFallback(prefix: string): TourDetailData {
  return {
    id: '',
    name: prefix,
    slug: '',
    origin: 'surabaya',
    href: '',
    duration: '0D / 0N',
    price: '',
    image: '',
    summary: '',
    highlights: [],
    originLabel: '',
    routeLabel: '',
    description: '',
    operationalNote: '',
    routeHandling: '',
    healthAccess: '',
    environmentalConditions: '',
    planningNotes: [],
    healthRequirements: [],
    environmentalRisks: [],
    routeHandlingNotes: [],
    inclusions: [],
    exclusions: [],
    itinerary: [],
  };
}

function getByExactPath(path: string): PackageIntelligence | null {
  const exact: Record<string, PackageIntelligence> = {
    '/tours/from-surabaya/ijen-2d1n': {
      routeFit: {
        title: 'Who this Ijen route is built for',
        copy: 'This package is strongest when Ijen is the real objective, not just a name added to a bigger itinerary.',
        items: [
          { title: 'Best for', copy: 'Guests who want Ijen handled seriously, with staging, screening, and route control instead of a rushed combo mindset.' },
          { title: 'Less ideal for', copy: 'Travelers who mostly want a broad East Java sampler and do not want screening or night-hike seriousness to drive the route.' },
          { title: 'Why this route exists', copy: 'It gives Ijen enough focus to be managed properly without forcing Bromo or overland additions into the same window.' },
        ],
      },
      rhythm: {
        title: 'What the rhythm feels like',
        copy: 'Although it is only two days, this package is not soft.',
        items: [
          { label: 'Wake-up reality', value: 'Expect a late-night or near-midnight wake-up before the Ijen ascent.' },
          { label: 'Longest stretch', value: 'The Surabaya to Bondowoso transfer on Day 1 is a real overland day, not a short city hop.' },
          { label: 'Most serious segment', value: 'The Ijen night climb is the segment that defines whether this package fits the guest well.' },
          { label: 'Best mindset', value: 'Choose this route when you want Ijen taken seriously rather than squeezed into a combo.' },
        ],
      },
      ijenReadiness: {
        title: 'Ijen readiness comes before date selection',
        copy: 'This route should always carry a visible readiness layer because screening, sulfur conditions, and night timing are part of the product itself.',
        items: [
          { title: 'Medical screening is part of the route', copy: 'JVTO arranges mandatory health screening before the climb. It is a route-control step, not a decorative formality.' },
          { title: 'Blue fire is never a promise', copy: 'Visibility and access conditions can change, so guests should book the crater experience responsibly rather than as a guaranteed photo outcome.' },
          { title: 'Bondowoso staging is deliberate', copy: 'The hotel stop, dinner, and screening sequence in the Ijen area are part of what makes the route operationally clean.' },
          { title: 'Sulfur and night conditions matter', copy: 'Guests with breathing sensitivity or low tolerance for night starts should review the health and closure guidance before checkout.' },
        ],
      },
      hotelRooming: hotel('The core overnight staging happens in the Bondowoso or Ijen area. The hotel night is part of screening and departure control, not just accommodation.'),
      vehicleCrew: vehicle('This route depends on clean long-distance handling on Day 1 and disciplined night-mountain support afterward.'),
      meals: meals('Bondowoso staging affects meals most clearly here: dinner before the Ijen push and post-Ijen refuel should be explained if they are part of the package flow.'),
      paymentSummary,
      closestAlternative: {
        title: 'If you want a broader East Java sequence',
        copy: 'Choose this package when Ijen is the point. Move to the wider Surabaya catalog if you want a fuller East Java loop instead of a focused Ijen expedition.',
        items: [{ title: 'Compare Surabaya routes', copy: 'Use the tours hub if you want a broader loop with Bromo, waterfall contrast, or longer pacing.', href: '/tours' }],
      },
    },
    '/tours/from-surabaya/ijen-bromo-madakaripura-4d3n': {
      routeFit: {
        title: 'Why this extra day matters',
        copy: 'This route is not just a longer version of a shorter combo. The extra day exists to improve pacing and reduce rushed transitions.',
        items: [
          { title: 'Best for', copy: 'Guests who want East Java breadth without compressing every stop into an aggressive three-day loop.' },
          { title: 'Less ideal for', copy: 'Travelers who want the shortest possible flagship loop and do not value extra buffer or recovery time.' },
          { title: 'Why this route exists', copy: 'It adds space around the core volcano-and-waterfall sequence so the route can breathe instead of stacking every demand into one hard push.' },
        ],
      },
      rhythm: {
        title: 'What the rhythm feels like',
        copy: 'The extra day helps the route feel more deliberate, not softer by default.',
        items: [
          { label: 'Wake-up reality', value: 'Ijen still drives the harshest wake-up and the strictest readiness check.' },
          { label: 'Longest stretch', value: 'The multi-stop westbound transfer sequence is easier to absorb here because the route has more buffer.' },
          { label: 'Wettest segment', value: 'Madakaripura still changes footwear, comfort, and recovery expectations.' },
          { label: 'Best mindset', value: 'Choose this route when the extra day buys you better pacing, not just a bigger checklist.' },
        ],
      },
      ijenReadiness: buildGenericIjenReadiness(tourFallback('Ijen-focused flagship')),
      hotelRooming: hotel('This route uses purposeful mountain staging across several stops. The value is not one specific hotel but the cleaner pacing created by the extra overnight.'),
      vehicleCrew: vehicle('Private vehicle continuity matters here because the route spans several landscapes and the extra day should feel like pacing value, not filler.'),
      meals: meals('Longer multi-stop routes need meal clarity around transfer days and waterfall timing so guests do not assume every day carries the same support pattern.'),
      paymentSummary,
      closestAlternative: {
        title: 'If you want the shorter version',
        copy: 'The 4-day route is strongest when the extra day solves pacing. If you mainly want the core highlights fast, compare the shorter Surabaya options first.',
        items: [{ title: 'Compare Surabaya routes', copy: 'Use the tours hub to compare the shorter flagship loop and see whether the extra day is actually worth it for your plan.', href: '/tours' }],
      },
    },
    '/tours/from-bali/bromo-ijen-3d2n': {
      routeFit: {
        title: 'Who this Bali route really fits',
        copy: 'This package is for guests who want both signature volcanoes while still keeping the route compact from Bali.',
        items: [
          { title: 'Best for', copy: 'Bali-based travelers who want Bromo and Ijen in one route and understand that pace and transfer logic are part of the product.' },
          { title: 'Less ideal for', copy: 'Guests who want a softer first day or a route that prioritizes recovery over efficient cross-island handling.' },
          { title: 'Why this route exists', copy: 'It solves the specific need of seeing both volcanoes from Bali without stretching into a longer overland discovery route.' },
        ],
      },
      rhythm: {
        title: 'What the rhythm feels like',
        copy: 'This is one of the cleanest Bali-origin volcano combinations, but it is still a compact and serious route.',
        items: [
          { label: 'Wake-up reality', value: 'Bromo sunrise and Ijen night timing both shape the route, with little softness between them.' },
          { label: 'Longest stretch', value: 'The Bali crossing into East Java is the main travel burden and should be treated as part of the route value equation.' },
          { label: 'Most intense day', value: 'The connection between Bromo and Ijen is where pace, sleep, and route discipline matter most.' },
          { label: 'Best mindset', value: 'Choose this route when the compact two-volcano logic matters more than adding extra scenery.' },
        ],
      },
      ijenReadiness: {
        title: 'Why Ijen still drives the seriousness',
        copy: 'Even when Bromo dominates the imagination, Ijen still drives the strictest readiness and support requirements inside this route.',
        items: [
          { title: 'Ijen is the safety gate', copy: 'Medical screening and crater-readiness remain the most important readiness filters on this itinerary.' },
          { title: 'The first day is not a warm-up', copy: 'Guests need to know that the Bali crossing and overland push happen before the volcano sequence even begins in full.' },
          { title: 'Compact does not mean casual', copy: 'The route stays clean because it stays focused, not because the logistics disappear.' },
        ],
      },
      hotelRooming: hotel('This route uses East Java-side mountain staging while preserving Bali-origin access. Guests should understand that it trades easier pacing for compact volcano logic.'),
      vehicleCrew: vehicle('This route gains value from cross-island handling and clean mountain-to-mountain coordination, not from a long stop count.'),
      meals: meals('Meals should be described clearly around Ijen staging and the main cross-island transfer windows because comfort depends on timing discipline.'),
      paymentSummary,
      closestAlternative: {
        title: 'If you want more route breadth',
        copy: 'Choose this route when volcanoes are the point. Move to the Bali comparison layer if you want to compare it against broader East Java journey shapes.',
        items: [{ title: 'Compare Bali routes', copy: 'Use the tours hub if you want to compare this focused route against longer or more varied cross-island options.', href: '/tours' }],
      },
    },
  };

  return exact[path] ?? null;
}

export function getPackageIntelligence(tour: TourDetailData): PackageIntelligence {
  const exact = getByExactPath(tour.href);
  if (exact) return exact;

  const days = parseDays(tour.duration);
  const haystack = `${tour.name} ${tour.routeLabel}`.toLowerCase();
  const includesIjen = hasTerm(haystack, /ijen/);
  const includesBromo = hasTerm(haystack, /bromo/);
  const includesWater = hasTerm(haystack, /madakaripura|tumpak|waterfall|papuma/);
  const isSurabaya = tour.origin === 'surabaya';
  const isBali = tour.origin === 'bali';
  const isFocusedIjen = includesIjen && !includesBromo && days <= 2;
  const isOverland = days >= 4 || includesWater;

  const base: PackageIntelligence = {
    routeFit: {
      title: 'Who this route really fits',
      copy: 'Use the package page to judge whether the route shape fits your timing, energy, and destination priority before you discuss dates.',
      items: [
        { title: 'Best for', copy: isOverland ? 'Guests who want the route to feel like a real journey with contrast, not just a compressed list of headline stops.' : includesIjen ? 'Guests who want serious volcano handling and understand that readiness matters as much as scenery.' : 'Guests who want a cleaner, more focused route and do not need every East Java highlight in one booking.' },
        { title: 'Less ideal for', copy: isOverland ? 'Travelers who mainly want the shortest path to the main volcanoes and do not benefit from extra breadth.' : includesIjen ? 'Travelers who want low-friction sightseeing without a readiness or screening gate.' : 'Guests expecting a soft pace or a broad East Java story from a short route.' },
        { title: 'Why this route exists', copy: tour.summary || 'This route exists to solve a specific route shape better than a generic catalog card can explain on its own.' },
      ],
    },
    rhythm: {
      title: 'What the rhythm feels like',
      copy: 'Calendar length alone does not explain how the route actually feels on the ground.',
      items: [
        { label: 'Wake-up reality', value: includesIjen ? 'Ijen still creates the earliest or most sensitive wake-up window in the route.' : includesBromo ? 'Bromo sunrise timing shapes the sleep rhythm more than the calendar length suggests.' : 'The route should be judged by its early starts and transfer rhythm, not by day count alone.' },
        { label: 'Longest stretch', value: tour.planningNotes[0] || 'The main transfer segment is part of the product logic and should not be treated as dead time.' },
        { label: includesWater ? 'Wettest segment' : 'Most serious segment', value: includesWater ? 'Waterfall or wet-terrain segments change footwear, comfort, and recovery expectations.' : includesIjen ? 'The night climb and crater handling are the parts that define whether the route is a good fit.' : 'The key route segment should be judged by cold, timing, and terrain rather than by brochure simplicity.' },
        { label: 'Best mindset', value: isOverland ? 'Choose this route when route breadth and progression are part of the value, not just added stop count.' : isFocusedIjen ? 'Choose this route when Ijen is the point and should be handled seriously.' : 'Choose this route when the route shape fits your plan, not because it is the first option you saw.' },
      ],
    },
    paymentSummary,
  };

  if (includesIjen) base.ijenReadiness = buildGenericIjenReadiness(tour);
  if (days >= 2) base.hotelRooming = hotel(isOverland ? 'This route uses multiple staging zones with different operational purposes. The value is in cleaner pacing, not one specific hotel name.' : 'The overnight zone exists to support route timing and readiness, not simply to add a bed between attractions.');
  base.vehicleCrew = vehicle(isBali ? 'Bali-origin routes gain value from cross-island continuity and clean handoff handling.' : isOverland ? 'Longer Surabaya-origin routes gain value from forward movement and disciplined transitions between very different stops.' : 'Private timing keeps the route coherent instead of forcing the group into a generic transfer rhythm.');
  base.meals = meals(isFocusedIjen ? 'The Ijen side of the route is where meal timing usually matters most because it affects screening, sleep, and the night-climb window.' : isOverland ? 'Longer routes should explain which meals are structural route support and which ones should not be assumed automatically.' : 'Shorter routes should state meal support clearly so guests do not project a longer-tour pattern onto a compact itinerary.');
  base.closestAlternative = {
    title: 'If you need a different route shape',
    copy: 'The best comparison usually comes from route shape and pacing, not from adding more stops on paper.',
    items: [{ title: isSurabaya ? 'Compare Surabaya routes' : 'Compare Bali routes', copy: isOverland ? 'Use the tours hub if you want to compare this broader route against cleaner, shorter alternatives.' : 'Use the tours hub if you want to compare this route against broader East Java options from the same origin.', href: '/tours' }],
  };

  return base;
}

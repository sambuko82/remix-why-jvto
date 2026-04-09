import type { Metadata } from 'next';
import { HubSubpageShell } from '@/components/hubs/HubSubpageShell';
import { buildPageMetadata } from '@/lib/page-metadata';
import { inclusionsExclusionsContent } from '@/lib/secondary-content';
import { SSOT } from '@/lib/ssot';

const route = '/policy/inclusions-exclusions';
const meta = SSOT.pages[route];

export const metadata: Metadata = buildPageMetadata(route, {
  title: 'Inclusions & Exclusions | Java Volcano Tour Operator',
  description:
    'What JVTO routes normally include, what stays excluded, and how to read the itinerary without making assumptions.',
});

export default function InclusionsExclusionsPage() {
  return (
    <HubSubpageShell
      backHref="/policy"
      backLabel="Back to Policy Pack"
      protocolLabel="Policy Pack"
      eyebrow="Scope clarity"
      title={meta?.h1 || 'Inclusions & Exclusions'}
      description="Use this page as the operating baseline for what is normally covered by a JVTO private route and what remains outside the route price. The confirmed itinerary still decides the exact scope."
      summaryCards={[...inclusionsExclusionsContent.summaryCards]}
      sections={[...inclusionsExclusionsContent.sections]}
      readNext={[
        {
          eyebrow: 'Terms',
          title: 'Booking policy',
          description: 'Use the booking policy to understand how payment and changes interact with the route scope.',
          href: '/policy/booking-payment-cancellation',
        },
        {
          eyebrow: 'Guide',
          title: 'Booking information',
          description: 'Read the guest-facing flow before treating a quote as final.',
          href: '/travel-guide/booking-information',
        },
        {
          eyebrow: 'Routes',
          title: 'Tours',
          description: 'Go back to the route layer and compare the package structure with this checklist in view.',
          href: '/tours',
        },
      ]}
    >
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-verified-bright">
            Typically included
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-authority-navy">Core route handling</h2>
          <ul className="mt-6 space-y-3">
            {inclusionsExclusionsContent.included.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-verified-bright" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">
            Typically excluded
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-authority-navy">Separate guest costs</h2>
          <ul className="mt-6 space-y-3">
            {inclusionsExclusionsContent.excluded.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-safety-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </HubSubpageShell>
  );
}

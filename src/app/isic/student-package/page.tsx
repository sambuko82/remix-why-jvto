import type { Metadata } from 'next';
import Link from 'next/link';
import { HubSubpageShell } from '@/components/hubs/HubSubpageShell';
import { buildPageMetadata } from '@/lib/page-metadata';
import { studentPackageContent } from '@/lib/secondary-content';
import { SSOT } from '@/lib/ssot';

const route = '/isic/student-package';
const meta = SSOT.pages[route];

export const metadata: Metadata = buildPageMetadata(route, {
  title: 'ISIC Student Package | Java Volcano Tour Operator',
  description:
    'Verified student access for eligible JVTO routes, including eligibility, quote handling, and how ISIC fits into the normal booking flow.',
});

export default function ISICStudentPackagePage() {
  return (
    <HubSubpageShell
      backHref="/travel-guide"
      backLabel="Back to Travel Guide"
      protocolLabel="Student Access"
      eyebrow="Verified student deals"
      title={meta?.h1 || 'ISIC Student Package'}
      description="Use this page to understand how JVTO handles verified student access on selected private routes. It is a controlled eligibility layer, not a separate tour model."
      summaryCards={[...studentPackageContent.summaryCards]}
      sections={[...studentPackageContent.sections]}
      readNext={[
        {
          eyebrow: 'Routes',
          title: 'Tours',
          description: 'Return to the route list after student eligibility is clear.',
          href: '/tours',
        },
        {
          eyebrow: 'Guide',
          title: 'Booking information',
          description: 'Read the normal booking flow so pricing and verification stay in the same decision path.',
          href: '/travel-guide/booking-information',
        },
        {
          eyebrow: 'Standards',
          title: 'Community standards',
          description: 'See how partnerships and operating ethics are framed across the wider trust layer.',
          href: '/why-jvto/community-standards',
        },
      ]}
      footerCallout={{
        eyebrow: 'Next step',
        title: 'Student pricing still ends in a normal private-route booking.',
        description:
          'Once ISIC eligibility is confirmed, the route should move through the same route, payment, and readiness flow used across the rest of the site.',
        href: '/tours',
        cta: 'Browse Tours',
      }}
    >
      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">
            Verification flow
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-authority-navy">
            How verified student access works
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            The student route is simple when handled in the right order: verify the card, confirm the route, then continue through the normal JVTO booking flow.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {studentPackageContent.verificationSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">
                Step 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">External verification</p>
          <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">
            Check the wider ISIC network separately if needed
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            If you want independent context beyond the JVTO route pages, use the official ISIC network as an external reference. That does not replace the JVTO route, policy, or booking documentation.
          </p>
          <Link
            href="https://www.isic.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-authority-navy transition-colors hover:text-safety-orange"
          >
            Visit ISIC
          </Link>
        </div>
      </section>
    </HubSubpageShell>
  );
}

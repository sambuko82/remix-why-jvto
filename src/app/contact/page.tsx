import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { HubSubpageShell } from '@/components/hubs/HubSubpageShell';
import { buildPageMetadata } from '@/lib/page-metadata';
import { contactPageContent } from '@/lib/secondary-content';

const route = '/contact';

const channelIcons = {
  WhatsApp: MessageCircle,
  Email: Mail,
  Office: MapPin,
} as const;

export const metadata: Metadata = buildPageMetadata(route, {
  title: 'Contact JVTO',
  description:
    'Contact JVTO through official channels for route questions, availability checks, custom planning, and trust-first private tour support.',
});

export default function ContactPage() {
  return (
    <HubSubpageShell
      backHref="/"
      backLabel="Back to home"
      protocolLabel="Contact"
      eyebrow="Official channels"
      title="Contact JVTO"
      description="If you are comparing routes, checking fit, or asking about a custom plan, contact JVTO directly. This page exists so the planning conversation stays clear, official, and grounded in the real route logic."
      summaryCards={contactPageContent.summaryCards}
      sections={contactPageContent.sections}
      readNext={contactPageContent.readNext}
      footerCallout={contactPageContent.footerCallout}
    >
      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">Channels</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-authority-navy">Use the right channel for the question</h2>
          <p className="text-sm leading-7 text-slate-600">
            Use an official JVTO channel that matches the kind of answer you need. If the route still feels unclear, read the route and guide pages first so the conversation starts with better context.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {contactPageContent.channels.map((channel) => {
            const Icon = channelIcons[channel.label as keyof typeof channelIcons];

            return (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] transition-all hover:-translate-y-1 hover:border-safety-orange/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/8 bg-[#fff3e8] text-safety-orange">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-safety-orange" />
                </div>
                <p className="mt-6 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">{channel.label}</p>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">{channel.value}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{channel.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-safety-orange">Inquiry templates</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-authority-navy">Start with a better first message</h2>
          <p className="text-sm leading-7 text-slate-600">
            You do not need a long brief. Use one of these prompts to shorten the back-and-forth and help JVTO answer with route-fit advice faster.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {contactPageContent.inquiryTemplates.map((template) => (
            <article
              key={template.title}
              className="rounded-[2rem] border border-black/10 bg-white/78 p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)]"
            >
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">Use when</p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-authority-navy">{template.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{template.copy}</p>
              <div className="mt-6 rounded-[1.5rem] border border-black/8 bg-black/[0.03] p-4">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">Prompt</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{template.prompt}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={template.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-authority-navy px-4 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-white"
                >
                  Open WhatsApp
                </a>
                <a
                  href={template.emailHref}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-authority-navy"
                >
                  Open email
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </HubSubpageShell>
  );
}

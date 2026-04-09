import type { Metadata } from 'next';
import '../index.css';
import { GlobalLayout } from '@/components/GlobalLayout';
import { SSOT } from '@/lib/ssot';

export const metadata: Metadata = {
  metadataBase: new URL(SSOT.organization.url),
  title: {
    default: 'Java Volcano Tour Operator',
    template: '%s | Java Volcano Tour Operator',
  },
  description: SSOT.organization.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

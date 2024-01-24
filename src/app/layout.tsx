import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../styles/normalize.css';
import '../styles/webflow.css';
import '../styles/morgantaxappeals.webflow.css';
import './globals.css';
// import { GoogleAnalytics } from "nextjs-google-analytics";
import dynamic from 'next/dynamic';


import { populateMetadata } from '@/utils';
import '../styles/morgantaxappeals.webflow.css';

const openSans = Open_Sans({ subsets: ['latin'], display: 'block' });

export const revalidate = 300000

export const metadata: Metadata = populateMetadata({
  title: 'QSBS Attestation Letter Service | IRS Compliant QSBS Service',
  description:
    'We provide you with defensible proof that your investment meets the specific Internal Revenue Code, Section 1202 requirements.',
});

const GoogleAnalytics = dynamic(
  () => import("nextjs-google-analytics").then((mod) => mod.GoogleAnalytics),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {typeof window !== 'undefined' && (
  <GoogleAnalytics trackPageViews gaMeasurementId="G-QF1DB5KPSE" />
)}
  
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </>
  );
}

import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../styles/normalize.css';
import '../styles/webflow.css';
import './globals.css';

import { populateMetadata } from '@/utils';
import '../styles/morgantaxappeals.webflow.css';

const openSans = Open_Sans({ subsets: ['latin'], display: 'block' });

export const revalidate = 300000

export const metadata: Metadata = populateMetadata({
  title: 'Commercial Property Tax Appeal',
  description:
    'Secure a fair assessment for your Los Angeles commercial property with expert tax appeal services.',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

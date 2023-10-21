import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import '../styles/normalize.css';
import '../styles/webflow.css';
import './globals.css';

import { populateMetadata } from '@/utils';
import '../styles/morgantaxappeals.webflow.css';

const openSans = Open_Sans({ subsets: ['latin'], display: 'block' });

export const metadata: Metadata = populateMetadata({
  title: 'San Francisco Tax Appeal',
  description:
    'Navigate SF commercial property tax appeals with ease. Expert assistance for fair property taxation.',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <section className="section-5">
          <div className="w-row">
            <div className="column-4 w-col w-col-6">
              <div className="columns w-row">
                <div className="w-col w-col-6">
                  <div className="w-layout-blockcontainer container-4 w-container">
                    <Image
                      src="/images/phone-call.webp"
                      loading="lazy"
                      width="15"
                      height="15"
                      alt="phone"
                      className="image-4"
                    />
                    <div className="text-block-3"> Call Us: (628) 333-9492</div>
                  </div>
                </div>
                <div className="w-col w-col-6">
                  <div className="w-layout-blockcontainer w-container">
                    <div className="w-layout-blockcontainer container-4 w-container">
                      <Image
                        src="/images/email.webp"
                        loading="lazy"
                        width="15"
                        height="15"
                        alt="email"
                        className="image-3"
                      />
                      <div> info@sftaxappeal.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-3 w-col w-col-6">
              <div className="text-block">
                <span className="text-span">
                  <strong>
                    <em className="italic-text">
                      Our clients have saved more than $27,000,000
                    </em>
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </section>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

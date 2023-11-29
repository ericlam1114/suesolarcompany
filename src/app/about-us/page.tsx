import { ResponsiveImage } from '@/components';
import { populateMetadata } from '@/utils';
import { Metadata, NextPage } from 'next';
import ericLamImage from '../../../public/images/eric-lam.webp';
import jonMorganImage from '../../../public/images/jon-morgan.webp';
import sloganImage from '../../../public/images/slogan.webp';

export const metadata: Metadata = populateMetadata({
  title: 'About Us',
  description:
    'Appeal your commercial property taxes. Expert help for fair assessments.',
  openGraph: {
    description:
      'Appeal your commercial property taxes. Expert help for fair assessments.',
  },
  twitter: {
    description:
      'Appeal your commercial property taxes. Expert help for fair assessments.',
  },
});

const AboutUsPage: NextPage = () => {
  return (
    <>
      <div className="w-layout-blockcontainer w-container">
        <div className="w-layout-blockcontainer container-5 w-container">
          <div className="w-layout-blockcontainer w-container">
            {/* <ResponsiveImage
              src={sloganImage}
              // width={940}
              alt="slogan"
              aspectRatio={1590 / 394}
            /> */}
            {/* <Image
              src={sloganImage}
              loading="lazy"
              alt="slogan"
              width={940}
              // srcset="images/Screen-Shot-2023-08-01-at-5.51.16-PM-p-500.png 500w, images/Screen-Shot-2023-08-01-at-5.51.16-PM-p-800.png 800w, images/Screen-Shot-2023-08-01-at-5.51.16-PM-p-1080.png 1080w, images/Screen-Shot-2023-08-01-at-5.51.16-PM.webp 1590w"
              sizes="(max-width: 479px) 100%, (max-width: 767px) 100%, (max-width: 991px) 728px, 940px"
            /> */}
          </div>
          <h1>About Us</h1>
          <p>
          Skyline Tax Appeal is a leading commercial real estate tax appeal firm, offering nationwide services for commercial property owners. Our focus is on protecting clients from undue taxation levied by local assessors.

<br />
            <br />
            The process of engaging with assessor&#x27;s offices can be daunting, intricate, and demanding. At Skyline Tax Appeal, we utilize our strong connections with these offices to oversee all facets of the property tax appeal process. This includes filing applications, exchanging data, evaluating property values, conducting negotiations, presenting cases at Assessment Appeals Boards, and monitoring refunds.
            <br />
            <br />
            Our goal is to craft your appeal using compelling valuation techniques and strong arguments, aiming to significantly lower the taxable value of your property. We achieve this by prioritizing our clients’ interests, maintaining clear and ongoing communication throughout the appeal process.


            <br />
            <br />
            Skyline Tax Appeal is dedicated to ensuring that you pay only a fair amount of property taxes. Our experienced team of property tax consultants, armed with effective strategies, has a track record of securing major tax reductions for our clients. We have successfully handled numerous appeals with Assessor’s Offices nationwide, achieving a remarkable 95% success rate and an average reduction in taxable value of 25%.


            <br />
            <br />
            Rest assured that your property’s valuation is carefully examined and defended against excessive taxation by our expert consultants. We take pride in our exceptional customer service at Skyline Tax Appeal and welcome any inquiries or concerns regarding any stage of the appeal process.

           
          </p>
          <div className="w-layout-blockcontainer w-container">
            <div className="columns-3 w-row">
              <div className="w-col w-col-6">
                <h2 className="heading-9">
                  <span className="text-span-2">
                    Jon Morgan, CEO &amp; Property Tax Consultant
                  </span>
                </h2>
                <div className="w-layout-blockcontainer w-container">
                  <p>
                    Jon Morgan, CEO of Skyline Tax Appeal, began his real estate
                    career in 2005, guided by his grandfather, Martin. <br />
                    <br />
                    His work has brought him face-to-face with intricate,
                    challenging properties spanning across the United States. A
                    highlight was his work on a monumental 800,000 square foot
                    office building nestled in the heart of San Francisco. This
                    endeavor, among others, underscored Jon&#x27;s unique
                    ability to handle complex property tax issues while
                    demonstrating his comprehensive understanding of commercial
                    property valuation.
                    <br />
                    <br />
                    Jon&#x27;s extensive knowledge of real estate tax
                    law and his transition from appraiser to tax appeal
                    consultant have led to a 98% success rate in appeals. <br />
                    <br />A proud UCSF alumnus, Jon enjoys family time and
                    outdoor activities like softball.
                  </p>
                </div>
              </div>
              <div className="w-col w-col-6">
                <ResponsiveImage
                  src={jonMorganImage}
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 354px, 460px"
                  loading="lazy"
                  alt="eric lam"
                />
              </div>
            </div>
          </div>
          <div className="w-layout-blockcontainer w-container">
            <div className="columns-4 w-row">
              <div className="w-col w-col-6">
                <ResponsiveImage
                  src={ericLamImage}
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 354px, 460px"
                  alt="eric lam"
                />
              </div>
              <div className="w-col w-col-6">
                <h2 className="heading-9">
                  <span className="text-span-2">
                    Eric Lam, Head of Business Strategy
                  </span>
                </h2>
                <div className="w-layout-blockcontainer w-container">
                  <p>
                    Eric Lam serves as our Head of Business Strategy and brings
                    to the role an extensive background in software development
                    and SEO strategy. <br />
                    <br />
                    His ability to pinpoint gaps in the market has always been
                    one of his strong suits. Eric, in partnership with Jon, took
                    the initiative to establish Skyline Tax Appeal. This venture was
                    specifically created to guide and support property owners
                    who may find themselves at a disadvantage due to a lack of
                    understanding of the intricacies involved in commercial
                    property tax appeals.
                    <br />
                    <br />
                    His dedication to the realm of real estate is not just
                    professional but is rooted deeply in his family&#x27;s
                    legacy. Eric&#x27;s grandfather cofounded Lam &amp;
                    Buchsbaum, a reputable real estate firm based in
                    Pennsylvania, and following in the family tradition his
                    father has built a career as one of the states top
                    commercial real estate appraiser&#x27;s.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;

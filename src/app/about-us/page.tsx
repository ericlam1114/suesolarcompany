import { ResponsiveImage } from '@/components';
import { populateMetadata } from '@/utils';
import { Metadata, NextPage } from 'next';
import ericLamImage from '../../../public/images/eric-lam.webp';
import jonMorganImage from '../../../public/images/jon-morgan.webp';
import sloganImage from '../../../public/images/slogan.webp';

export const metadata: Metadata = populateMetadata({
  title: 'About Us',
  description:
    'Appeal your San Francisco commercial property taxes. Expert help for fair rates.',
  openGraph: {
    description:
      'Appeal your San Francisco commercial property taxes. Expert help for fair rates.',
  },
  twitter: {
    description:
      'Appeal your San Francisco commercial property taxes. Expert help for fair rates.',
  },
});

const AboutUsPage: NextPage = () => {
  return (
    <>
      <div className="w-layout-blockcontainer w-container">
        <div className="w-layout-blockcontainer container-5 w-container">
          <div className="w-layout-blockcontainer w-container">
            <ResponsiveImage
              src={sloganImage}
              // width={940}
              alt="slogan"
              aspectRatio={1590 / 394}
            />
            {/* <Image
              src={sloganImage}
              loading="lazy"
              alt="slogan"
              width={940}
              // srcset="images/Screen-Shot-2023-08-01-at-5.51.16-PM-p-500.png 500w, images/Screen-Shot-2023-08-01-at-5.51.16-PM-p-800.png 800w, images/Screen-Shot-2023-08-01-at-5.51.16-PM-p-1080.png 1080w, images/Screen-Shot-2023-08-01-at-5.51.16-PM.webp 1590w"
              sizes="(max-width: 479px) 100%, (max-width: 767px) 100%, (max-width: 991px) 728px, 940px"
            /> */}
          </div>
          <h1>About Us - SF Tax Appeal</h1>
          <p>
            SF Tax Appeal is a premier commercial real estate tax appeal firm
            specializing in defending San Francisco property owners. We serve as
            your strong ally, devoted to shielding you from unnecessary
            over-taxation by county assessors. <br />
            <br />
            Navigating the maze of dealings with assessor&#x27;s offices can be
            overwhelming, complex, and time-consuming. Leveraging our robust
            relationships with these offices, we manage every aspect of the
            property tax appeal process, from application filing, data exchange,
            property valuation, to negotiation, case presentation at the
            Assessment Appeals Board, and refund tracking.
            <br />
            <br />
            Our mission at SF Tax Appeal is to structure your appeal using
            persuasive valuation methodologies and robust arguments, advocating
            for a significant reduction in your property&#x27;s taxable value.
            We realize this by consistently putting our clients&#x27; best
            interests at the forefront, offering transparent, and constant
            communication throughout the tax appeal process.
            <br />
            <br />
            At SF Tax Appeal, we are committed to ensuring you pay only your
            equitable share of property taxes. Our expert team of property tax
            consultants, equipped with proven strategies, has a history of
            obtaining substantial property tax reductions. We&#x27;ve
            successfully resolved thousands of appeals with Assessor’s Offices
            across California, boasting a stellar 95% success rate with an
            average reduction in taxable value of 25%.
            <br />
            <br />
            Feel secure knowing your property&#x27;s value is meticulously
            reviewed and safeguarded from any unwarranted taxation by our
            seasoned tax consultants. SF Tax Appeal takes pride in our superior
            customer service, and we invite any questions or concerns about any
            step of the appeal process.Vision Statement – We are SF Tax Appeal:
            relentlessly working to provide peace of mind for our clients by
            generating results and sustaining transparent communication
            throughout the tax appeal process.
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
                    Jon Morgan, CEO of SF Tax Appeal, began his real estate
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
                    Jon&#x27;s extensive knowledge of California real estate tax
                    law and his transition from appraiser to tax appeal
                    consultant have led to a 98% success rate in appeals. <br />
                    <br />A proud UCSF alumnus, Jon enjoys family time and
                    outdoor activities in San Francisco.
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
                    the initiative to establish SFTaxAppeal. This venture was
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

import { ResponsiveImage } from "@/components";
import { populateMetadata } from "@/utils";
import { Metadata, NextPage } from "next";
import ericLamImage from "../../../public/images/eric-lam.webp";
import jonMorganImage from "../../../public/images/jon-morgan.webp";
import sloganImage from "../../../public/images/slogan.webp";
import "./Tailwind.css";
import Founder from "./founder";

export const metadata: Metadata = populateMetadata({
  title: "About Us | Sue Solar Company | Solar Company Lawsuit",
  description:
    "We offer robust evidence and legal support to demonstrate that your solar company has violated contractual agreements or consumer protection laws.",
  openGraph: {
    description:
      "We offer robust evidence and legal support to demonstrate that your solar company has violated contractual agreements or consumer protection laws.",
  },
  twitter: {
    description:
      "We offer robust evidence and legal support to demonstrate that your solar company has violated contractual agreements or consumer protection laws.",
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
          <h1 className="text-2xl pt-4 pb-6">About Us</h1>
          <p>
            Our mission is to shield our clients from the consequences of
            deceptive solar company practices and ensure they receive the
            justice and compensation they deserve.
            <br />
            <br />
            Navigating the intricacies of legal cases against solar companies
            can be complex and demanding. At SueSolarCompany, we utilize our
            extensive legal knowledge and strong network within the legal
            community to manage every aspect of your case against a solar
            company. This includes thorough investigation, document preparation,
            evidence gathering, and robust legal representation.
            <br />
            <br />
            Our approach is rooted in comprehensive legal analysis and strategic
            planning, aimed at challenging the wrongful actions of solar
            companies. We prioritize our clients' needs, ensuring clear and
            consistent communication throughout the legal process.
            <br />
            <br />
            SueSolarCompany is dedicated to ensuring that your case against a solar
            company is presented effectively and accurately, maximizing the
            likelihood of a favorable outcome. Our team of seasoned legal
            professionals, equipped with strategic approaches and a deep
            understanding of consumer protection laws, has consistently helped
            clients successfully navigate their disputes. We are the leading
            online resource for legal assistance against solar companies.
            <br />
            <br />
            With SueSolarCompany, you can trust that your case will be meticulously
            evaluated and pursued by our expert team. We take pride in
            delivering exceptional client service and are always available to
            answer any queries or address concerns during your legal journey.
          </p>
          <div className="w-layout-blockcontainer w-container">
            <div className="columns-3 w-row">
              <div className="w-col w-col-6">
                {/* <h2 className="heading-9">
                  <span className="text-span-2">
                    Jon Morgan, CEO &amp; Property Tax Consultant
                  </span>
                </h2> */}
                {/* <div className="w-layout-blockcontainer w-container">
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
                </div> */}
                {/* </div>
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
                  </p> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* <Founder></Founder> */}
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;

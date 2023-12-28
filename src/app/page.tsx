import { HeroSection } from "@/components";
import Image from "next/image";
import downloadImage from "../../public/images/download.png";
import sfImage from "../../public/images/office.webp";
import building from "../../public/images/LAbuilding2.webp";
import building2 from "../../public/images/LAbuilding3.webp";
import sfCornerImage from "../../public/images/building.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles Commercial Property Tax Appeal",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="class-section">
        <div className="wrap-2 a">
          <div className="left-1">
            <h2 className="heading-2">Lower Your Commercial Property Tax</h2>
            <p className="paragraph-2">
              In the face of deteriorating market conditions, a proactive
              approach to your Los Angeles commercial property tax can lead to
              significant savings. As the real estate market experiences
              downturns, your property&#x27;s assessed value may no longer
              reflect its current worth. This presents an opportunity to
              reassess and potentially reduce your property tax, aligning it
              more accurately with the current market realities.
            </p>
            <a href="#email-form" className="button-2 w-button">
              Free Tax Review
            </a>
          </div>
          <div className="right-1">
            <Image
              src={building}
              width="300"
              height="300"
              alt="commercial property tax appeals"
              className="screenshot"
            />
          </div>
        </div>
        <div className="wrap-2 b">
          <div className="left-2">
            <Image
              src={building2}
              width="300"
              height="300"
              alt="tax appeals san francisco"
              className="screenshot"
            />
          </div>
          <div className="right-2">
            <h2 className="heading-2">Done-for-you Los Angeles tax appeal</h2>
            <h4 className="heading-3">Here&#x27;s what you get...</h4>
            <p className="paragraph-2">
              We&#x27;re proficient in navigating the diverse landscapes of the
              Los Angeles real estate market and are committed to achieving
              reduced assessments for your commercial properties. We focus on
              delivering an efficient appeal process and ensure your tax
              obligations reflect the true value of your property. Achieve peace
              of mind and savings.
            </p>
            <a href="#email-form" className="button-2 w-button">
              Free Tax Review
            </a>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="wrap-1">
          <h2 className="heading-3">
            <strong>Why Choose Los Angeles Tax Appeal?</strong>
          </h2>
          <p className="subhead-3">
            Utilizing our profound expertise in Los Angeles commercial real
            estate, our primary goal is to maximize your tax savings.
          </p>
          <div className="column-wrap-1">
            <div className="column-1">
              <h4 className="column-1-title">Done-For-You</h4>
              <Image
                src={downloadImage}
                width="100"
                height="100"
                alt="green check mark"
                className="icon"
              />
              <p className="paragraph-3">
                We&#x27;ll manage the commercial tax appeal process end-to-end
              </p>
            </div>
            <div className="column-1">
              <h4 className="column-1-title">CRE Tax Experts</h4>
              <Image
                src={downloadImage}
                width="100"
                height="100"
                alt="green check mark"
                className="icon"
              />
              <p className="paragraph-3">
                Los Angeles native representation and expertise
              </p>
            </div>
            <div className="column-1">
              <h4 className="column-1-title">
                <strong>Commitment Free</strong>
              </h4>
              <Image
                src={downloadImage}
                alt="green check mark"
                width="100"
                height="100"
                className="icon"
              />
              <p className="paragraph-3">
                No upfront costs or fees until savings have been achieved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="wrap-3">
          <h2 className="heading-5">
            Discover Your Los Angeles Commercial Property Tax Savings...
          </h2>
          <div className="div-block-2">
            <a href="#email-form" className="button-2 w-button">
              Free Tax Review
            </a>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-20">
            Your Partner in LA County Commercial Property Tax Appeals
          </h2>
          <p className="paragraph-10">
            We stand as a nationwide advocate for property owners challenging
            unfair property tax assessments. The Assessment Appeals Board offers
            a formal avenue for your commercial property tax grievances. Our
            all-encompassing service includes expert tax representatives and
            appeal specialists who guide you through the complex appeal process.
            We meticulously prepare and submit your property tax appeal
            application, adhering to strict deadlines. Our team, comprising
            licensed attorneys and real estate appraisers, excels in diverse
            U.S. jurisdictions and focuses on disputing assessed values of
            commercial properties, aiming to minimize your property tax
            liability as determined by the tax assessor for the current tax
            year.
          </p>
        </div>
        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-21">
            Streamline Your Los Angeles County Commercial Property Tax Appeal
          </h2>
          <p className="paragraph-11">
            More than just a service provider, we partner with you. We expertly
            handle every aspect of the property tax appeal process, from meeting
            filing deadlines to compiling necessary documentation. Our
            proficiency spans dealing with county tax assessment divisions
            nationwide, leveraging knowledge of fair market value and factored
            base year assessments. This approach allows us to effectively
            challenge your commercial property’s taxable value. Operating within
            standard business hours, we ensure smooth coordination with
            Assessment Appeals Board officers. We strive for efficient
            processing and scheduling of your appeal, enhancing your chances for
            tax savings. Our assistance makes navigating the intricacies of
            property taxes and appeals more manageable, promising fair treatment
            and potential savings for commercial property owners.
          </p>
        </div>
        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-21">Secure Optimal Tax Savings</h2>
          <h3 className="">
            <strong>
              Ensure Equitable Assessments for Your Commercial Property
            </strong>
          </h3>
          <p className="paragraph-11">
            Property tax assessments are pivotal to commercial property owners&apos;
            finances. Our team, skilled in the complexities of property taxes,
            ensures you&apos;re not overburdened. We meticulously examine tax
            assessments to guarantee fair property valuation. Utilizing our
            knowledge of market trends and property values, we contest unjust
            assessments to achieve tax reductions. Our strategy includes
            analyzing comparable properties and market values, aligning your tax
            duties with the genuine fair market value of your property.
          </p>
        </div>

        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-21">
            Efficient Appeal Process for Effective Tax Management
          </h2>
          <h3 className="">
            <strong>Demystifying Property Tax Appeals</strong>
          </h3>
          <p className="paragraph-11">
            The property tax appeal journey can be intricate. We specialize in
            demystifying this process, offering end-to-end support from filing
            to the hearing. Our expertise covers the breadth of commercial
            property tax appeals, including documentation preparation and
            representing your interests at the Assessment Appeals Board. We aim
            to minimize appeal-related costs and time while maximizing favorable
            outcomes. Our seasoned tax professionals, familiar with various
            jurisdictional tax laws, ensure precise and attentive handling of
            your appeal, aligning our efforts with your needs for optimal appeal
            results.
          </p>
        </div>
      </div>
    </>
  );
}

import { HeroSection } from "@/components";
import Image from "next/image";
import downloadImage from "../../public/images/check.webp";
// import sfImage from "../../public/images/office.webp";
import chart from "../../public/images/chart.webp";
import defer from "../../public/images/defer.webp";
import Process from '../../src/components/Process'
import Timeline from '../../src/components/Timeline'
// import building2 from "../../public/images/LAbuilding3.webp";

import { Metadata } from "next";
import Stats from "../components/Stats";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "QSBS Attestation Letter Online",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />

      <div className="class-section">
        <div className="wrap-2 a">
          <div className="left-1">
            <h2 className="heading-2">Capital Gains Tax Exclusion</h2>
            <p className="paragraph-2">
              One of the primary benefits of QSBS is the ability to exclude up
              to 100% of capital gains from federal income taxes on the sale of
              the stock, subject to certain limits. This exclusion is capped at
              the greater of $10 million or 10 times the taxpayer's basis in the
              stock.
              <br></br>
              <br></br>
              the Qualified Small Business Stock (QSBS) provision, outlined in
              Section 1202 of the Internal Revenue Code, presents a significant
              tax incentive for investors in small businesses, particularly
              through the capital gains tax exclusion. The primary attraction of
              QSBS is the potential to exclude up to 100% of capital gains from
              federal income taxes when the stock is sold, provided certain
              conditions are met. This exclusion is subject to a cap, which is
              the greater of $10 million or 10 times the taxpayer's basis in the
              stock. For example, if an investor's initial investment (basis) in
              the stock is $1 million, they could potentially exclude up to $10
              million in gains from their taxable income.
            </p>
            <a href="#email-form" className="button-2 w-button">
              Check Eligibility
            </a>
          </div>
          <div className="right-1">
            <Image
              src={chart}
              width="500"
              height="500"
              alt="chart"
              className=""
            />
          </div>
        </div>
        <div className="wrap-2 a">
          <div className="right-1">
            <Image
              src={defer}
              width="500"
              height="500"
              alt="deferal"
              className=""
            />
          </div>
          <div className="left-1">
            <h2 className="heading-2">Deferral of Capital Gains</h2>
            <p className="paragraph-2">
              Investors may also defer capital gains taxes by reinvesting their
              gains from the sale of QSBS into another QSBS within 60 days. This
              allows for the postponement of tax payments and can help in
              managing cash flows.
              <br />
              <br />
              The provision for deferring capital gains taxes through
              reinvestment in Qualified Small Business Stock (QSBS) offers an
              additional financial advantage for investors. Under Section 1045
              of the Internal Revenue Code, if an investor sells QSBS and
              reinvests the gains into another QSBS within a 60-day period, they
              can defer capital gains taxes that would otherwise be due on the
              sale. This aspect of the tax code is particularly beneficial for
              investors looking to continuously invest in small, innovative
              companies while managing their tax liabilities more effectively.
            </p>
            <a href="#email-form" className="button-2 w-button">
              Check Eligibility
            </a>
          </div>
        </div>
       
      </div>
         <Process></Process>
         <Timeline></Timeline>
      <div className="section-1">
        <div className="wrap-1">
          <h2 className="text-4xl">
            <strong>Why Choose QSBSLetter.com?</strong>
          </h2>
          {/* <p className="subhead-3">
            Utilizing our profound expertise in Los Angeles commercial real
            estate, our primary goal is to maximize your tax savings.
          </p> */}
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
                We&#x27;ll manage the QSBS attestation letter process end-to-end
              </p>
            </div>
            <div className="column-1">
              <h4 className="column-1-title">QSBS Experts</h4>
              <Image
                src={downloadImage}
                width="100"
                height="100"
                alt="green check mark"
                className="icon"
              />
              <p className="paragraph-3">
               Legal and accounting experts on-hand for your attestation letter
              </p>
            </div>
            <div className="column-1">
              <h4 className="column-1-title">
                <>QSBS Focused</>
              </h4>
              <Image
                src={downloadImage}
                alt="green check mark"
                width="100"
                height="100"
                className="icon"
              />
              <p className="paragraph-3">
               We focus 100% on QSBS so we're on top of the latest laws and compliance
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Check If You Qualify
          </h2>
          <p className="mt-6 text-lg f leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="div-block-2">
          <a href="#email-form" className="button-2 w-button">
            Check Eligibility
          </a>
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
            Property tax assessments are pivotal to commercial property
            owners&apos; finances. Our team, skilled in the complexities of
            property taxes, ensures you&apos;re not overburdened. We
            meticulously examine tax assessments to guarantee fair property
            valuation. Utilizing our knowledge of market trends and property
            values, we contest unjust assessments to achieve tax reductions. Our
            strategy includes analyzing comparable properties and market values,
            aligning your tax duties with the genuine fair market value of your
            property.
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
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to get started?
            <br />
            Check your QSBS eligibility today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

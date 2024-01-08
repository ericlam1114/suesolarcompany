import { BlogPostsGrid, HeroSection } from "@/components";
import Image from "next/image";
import downloadImage from "../../public/images/check.webp";
// import sfImage from "../../public/images/office.webp";
import chart from "../../public/images/chart.webp";
import defer from "../../public/images/defer.webp";
import Process from "../../src/components/Process";
import Timeline from "../../src/components/Timeline";
// import building2 from "../../public/images/LAbuilding3.webp";

import { Metadata } from "next";
import Stats from "../components/Stats";
import "../styles/globals.css";
import { Post } from "@/types";
import { client } from "../../sanity/lib/client";

export const metadata: Metadata = {
  title: "QSBS Attestation Letter Online",
};

export default async function Home() {

 const posts = await client.fetch<Post[]>(
  `*[_type == "post"]|order(publishedAt desc)`
);

const limitedPosts = posts.slice(0, 4); // Limit to 4 posts
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
              the greater of $10 million or 10 times the taxpayer&lsquos basis in the
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
              the greater of $10 million or 10 times the taxpayer&lsquos basis in the
              stock. For example, if an investor&lsquos initial investment (basis) in
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
                We focus 100% on QSBS so we&lsquore on top of the latest laws and
                compliance
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
            Your Premier QSBS Attestation Letter Service
          </h2>
          <p className="paragraph-10">
            As specialists in QSBS (Qualified Small Business Stock) attestation
            letters, we provide crucial support for investors seeking to benefit
            from the tax advantages associated with QSBS under Section 1202 of
            the Internal Revenue Code. Our comprehensive service includes expert
            guidance through the QSBS attestation process, ensuring your
            investments comply with the stringent IRS regulations. Our team,
            consisting of experienced tax professionals and legal advisors, is
            proficient in navigating the complexities of QSBS criteria across
            diverse U.S. jurisdictions, focusing on validating your stock’s
            eligibility for significant capital gains tax exemptions.
          </p>
        </div>
       
        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-21">
            Streamline the QSBS Attestation Process
          </h2>

          <p className="paragraph-11">
            We are more than just a service provider; we are your partner in
            maximizing your QSBS benefits. We handle every aspect of the QSBS
            attestation process, from ensuring the accuracy of your stock
            details to meeting critical submission deadlines. Our expertise
            extends to dealing with the IRS’s stringent requirements, leveraging
            our deep understanding of QSBS regulations. This expertise allows us
            to effectively confirm the qualification of your stock as QSBS,
            operating within standard business hours to ensure seamless
            coordination with IRS representatives. Our goal is to simplify the
            attestation process, enhancing your chances for tax savings and
            making the complexities of QSBS compliance manageable, promising
            thorough validation and potential savings for investors.
          </p>
        </div>

        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-21">Secure Optimal Tax Benefits with QSBS</h2>

          <p className="paragraph-11">
            Ensure Compliance and Maximize Savings with Qualified Small Business
            Stock For investors in small businesses, QSBS tax benefits are a key
            financial consideration. Our skilled team ensures that your QSBS
            investments are accurately represented and compliant, preventing you
            from missing out on significant tax savings. We meticulously
            evaluate your stock investments against QSBS criteria, ensuring fair
            and legitimate qualification. Utilizing our expertise in tax law and
            QSBS regulations, we challenge any discrepancies to secure rightful
            tax reductions. Our approach includes a thorough analysis of your
            stock&lsquos eligibility, aligning your investments with the true spirit
            of QSBS benefits.
          </p>
        </div>
      </div>
      <div id="blog-posts" className="blog-posts-section">
        {/* <h2>Latest Blog Posts</h2> */}
        <BlogPostsGrid posts={limitedPosts} /> {/* Add BlogPostsGrid with a limit prop */}
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

import { BlogPostsGrid, HeroSection } from "@/components";
import Image from "next/image";
import downloadImage from "../../public/images/check.webp";
// import sfImage from "../../public/images/office.webp";
import chart from "../../public/images/chart.webp";
import defer from "../../public/images/defer.webp";
import Process from "../../src/components/Process";
import Timeline from "../../src/components/Timeline";
import handshakeImage from "../../public/images/handshake.png";
import ThreeModule from "../components/ThreeModule";
import investors from "../../public/images/investors.png";

// import building2 from "../../public/images/LAbuilding3.webp";

import { Metadata } from "next";
import Stats from "../components/Stats";

import { Post } from "@/types";
import { client } from "../../sanity/lib/client";

export const metadata: Metadata = {
  title: "QSBS Attestation Letter Service | IRS Compliant QSBS Service",
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
      <div className="bg-white py-24 sm:py-22">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-6xl">
                Founders Leverage QSBS
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                QSBS allows founders to potentially exclude up to 100% of
                capital gains from federal taxes on the sale of their stock,
                provided they meet{" "}
                <a
                  href="https://www.qsbsletter.com/blog/official-qsbs-criteria"
                  className="text-blue-600"
                  target="_blank"
                >
                  specific criteria
                </a>{" "}
                and hold the stock for at least five years.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Strategic planning is crucial for founders to maximize these
                benefits, ensuring long-term investment in their ventures and
                alignment with QSBS regulations.
              </p>
              <div className="mt-10 flex md:lg:pt-8 pt-0 items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                <a
                  href="#"
                  className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check Eligibility
                </a>
                {/* <a
              href="/blog"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:flex-shrink-0 ">
              <Image
                src={handshakeImage}
                width="500"
                height="500"
                className="rounded-md"
                alt="Handshake"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-22">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mt-10 lg:mt-0 lg:flex-shrink-0 ">
              <Image
                src={investors}
                width="500"
                height="500"
                className="rounded-md"
                alt="investors"
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-6xl">
                Investors Leverage QSBS
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Investors can exclude a significant portion, up to 100%, of
                capital gains from federal taxes when selling their stock. QSBS
                serves as a strategic tool for investors aiming to diversify
                portfolios while supporting high-growth potential businesses.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This incentive not only promotes growth in innovative startups
                but also enhances investors&apos; financial strategies through
                tax-efficient investments.
              </p>
              <div className="mt-10 flex md:lg:pt-8 pt-0 items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                <a
                  href="#"
                  className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check Eligibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Process></Process>
      <div className="section-1">
        <div className="wrap-1">
          <h2 className="text-4xl">
            <strong>Why Choose QSBSLetter.com?</strong>
          </h2>
          {/* <p className="subhead-3">
            Utilizing our profound expertise in Los Angeles commercial real
            estate, our primary goal is to maximize your tax savings.
          </p> */}
          {/* <div className="column-wrap-1">
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
                We focus 100% on QSBS so we&apos;re on top of the latest laws
                and compliance
              </p>
            </div>
          </div> */}
          <ThreeModule></ThreeModule>
          <Timeline></Timeline>
        </div>
      </div>

      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-blue-600">
              Section 1202 of the Internal Revenue Code
            </h2> */}
            <h2 className="mt-2 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
             The QSBS Benefits
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Attestation letters are a defensible tool that ensures compliance
              with IRS regulations and validates the taxpayer&apos;s claim for
              QSBS benefits, thereby acting as a supportive document during
              audits. Founders and Investors request this letter as proof that
              their investment meets the necessary criteria for expected tax
              benefits, making it an integral component of legal and financial
              due diligence in QSBS transactions.
            </p> */}
            {/* <div className="pt-8">
              <a
                href="/blog"
                className="text-sm  font-semibold leading-6 text-blue-600"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className="relative overflow-hidden pt-16"> */}
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
        {/* <div className=" px-6 py-24 sm:py-32 lg:px-8"> */}
        {/* <div className="mx-auto max-w-2xl text-center"> */}
        {/* <h2 className="text-3xl font-bold tracking-tight text-black sm:text-6xl">Needed From You...</h2> */}

        {/* </div> */}
        {/* </div> */}
        {/* <Image
                src={DesignImage}
                width={2432}
                height={1442}
                alt="green check mark"
                className="icon"

              /> */}
        {/* <img
src={DesignImage}
            alt="criteria"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          /> */}
        {/* <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div> */}
        <div className="mx-auto  lg:px-8">
          {/* <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl> */}
        </div>
      </div>

      {/* </div> */}

      <div className="class-section">
        <div className="wrap-2 a">
          <div className="left-1">
            <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-4xl">Capital Gains Tax Exclusion</h2>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
              One of the primary benefits of QSBS is the ability to exclude up
              to 100% of capital gains from federal income taxes on the sale of
              the stock, subject to certain limits. This exclusion is capped at
              the greater of $10 million or 10 times the taxpayer&apos;s basis
              in the stock.
              <br></br>
              <br></br>
              The Qualified Small Business Stock (QSBS) provision, outlined in
              Section 1202 of the Internal Revenue Code, presents a significant
              tax incentive for investors in small businesses, particularly
              through the capital gains tax exclusion. The primary attraction of
              QSBS is the potential to exclude up to 100% of capital gains from
              federal income taxes when the stock is sold, provided certain
              conditions are met. This exclusion is subject to a cap, which is
              the greater of $10 million or 10 times the taxpayer&apos;s basis
              in the stock. For example, if an investor&apos;s initial
              investment (basis) in the stock is $1 million, they could
              potentially exclude up to $10 million in gains from their taxable
              income.
            </p>
            <div className="mt-10 flex justify-center md:lg:pt-8 pt-0 items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                <a
                  href="#email-form"
                  className="rounded-md   bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check Eligibility
                </a>
              </div>
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
            {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Founders Leverage QSBS
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  QSBS allows founders to potentially exclude up to 100% of
                  capital gains from federal taxes on the sale of their stock,
                  provided they meet{" "}
                  <a
                    href="https://www.qsbsletter.com/blog/official-qsbs-criteria"
                    className="text-blue-600"
                    target="_blank"
                  >
                    specific criteria
                  </a>{" "}
                  and hold the stock for at least five years.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Strategic planning is crucial for founders to maximize these
                  benefits, ensuring long-term investment in their ventures and
                  alignment with QSBS regulations.
                </p>
              </div>
            </div> */}
            <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-6xl">Deferral of Capital Gains</h2>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
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
            <div className="mt-10 flex md:lg:pt-8 pt-0 justify-center items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                <a
                  href="#email-form"
                  className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check Eligibility
                </a>
              </div>
          </div>
        </div>
      </div>

      <div className="bg-white 8 ">
        <div className="mx-auto max-w-2xl pt-12 pb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Synonymous With Eligibility
          </h2>
          {/* <p className="mt-6 text-lg f leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="div-block-2">
          <a href="#email-form" className="button-2 w-button">
            Check Eligibility
          </a>
        </div> */}
        </div>
      </div>

      <div className="section-3">
        <div className="w-layout-blockcontainer w-container">
          <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-3xl">
            Your Premier QSBS Attestation Letter Service
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
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
          <h2 className="text-4xl sm:mt-12 pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-3xl">
            Streamline the QSBS Attestation Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are more than just a service provider; we are your partner in
            maximizing your QSBS benefits. We handle every aspect of the QSBS
            attestation process, from ensuring the accuracy of your stock
            details to meeting critical submission deadlines. Our expertise
            extends to dealing with the IRS&apos;s stringent requirements, leveraging
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
          <h2 className="text-4xl sm:mt-12 pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-3xl">Secure Optimal Tax Benefits with QSBS</h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ensure Compliance and Maximize Savings with Qualified Small Business
            Stock For investors in small businesses, QSBS tax benefits are a key
            financial consideration. Our skilled team ensures that your QSBS
            investments are accurately represented and compliant, preventing you
            from missing out on significant tax savings. We meticulously
            evaluate your stock investments against QSBS criteria, ensuring fair
            and legitimate qualification. Utilizing our expertise in tax law and
            QSBS regulations, we challenge any discrepancies to secure rightful
            tax reductions. Our approach includes a thorough analysis of your
            stock&lsquos eligibility, aligning your investments with the true
            spirit of QSBS benefits.
          </p>
        </div>
      </div>
      <div id="blog-posts" className="blog-posts-section">
        {/* <h2 className="text-4xl font-semibold">Learn About QSBS</h2> */}
        {/* <div className="bg-white px-6 py-24 sm:py-32 lg:px-8"> */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn About QSBS
          </h2>
          {/* <p className="mt-6 text-lg f leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p> */}
          {/* </div> */}
          {/* <div className="div-block-2">
          <a href="#email-form" className="button-2 w-button">
            Check Eligibility
          </a>
        </div> */}
        </div>
        <BlogPostsGrid posts={limitedPosts} />{" "}
        {/* Add BlogPostsGrid with a limit prop */}
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
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="/services"
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

import { BlogPostsGrid, HeroSection } from "@/components";
import Image from "next/image";
import downloadImage from "../../public/images/check.webp";
// import sfImage from "../../public/images/office.webp";
import chart from "../../public/images/chart.webp";
import defer from "../../public/images/defer.webp";
import Process from "../../src/components/Process";
import Timeline from "../../src/components/Timeline";
import image1 from "../../public/images/image1.webp";
import image2 from "../../public/images/image2.webp";
import image3 from "../../public/images/image3.webp";
import image4 from "../../public/images/image4.webp";
import ThreeModule from "../components/ThreeModule";
import investors from "../../public/images/investors.png";

// import building2 from "../../public/images/LAbuilding3.webp";

import { Metadata } from "next";
import Stats from "../components/Stats";

import { Post } from "@/types";
import { client } from "../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Solar Company Legal Support | Your Ally in Solar Lawsuits",
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
                Stand Against Solar Scams
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We specialize in helping clients who have been misled or harmed
                by solar companies. Our mission is to ensure you receive justice
                and compensation for any fraudulent practices, poor
                installations, or contract breaches.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our team provides expert legal advice, guiding you through the
                complex process of building a case against deceptive solar
                companies.
              </p>
              <div className="mt-10 flex md:lg:pt-8 pt-0 items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                <a
                  href="#"
                  className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn More
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
                src={image1}
                width="500"
                height="500"
                className="rounded-md"
                alt="solar scam"
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
                src={image2}
                width="500"
                height="500"
                className="rounded-md"
                alt="solar scam"
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-6xl">
                Expert Legal Assistance for Solar Company Disputes
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We provide specialized legal assistance for disputes with solar
                companies. Our team of experienced lawyers is dedicated to
                protecting your rights and ensuring fair compensation for any
                malpractices.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We thoroughly review contracts, gather necessary evidence, and
                represent you in legal proceedings, aiming to achieve the best
                possible outcome for your case.
              </p>
              <div className="mt-10 flex md:lg:pt-8 pt-0 items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                <a
                  href="#"
                  className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Process></Process> */}
      <div className="section-1">
        <div className="wrap-1">
          <h2 className="text-4xl">
            <strong>Why Choose SueSolarCompany.com?</strong>
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
          {/* <Timeline></Timeline> */}
        </div>
      </div>

      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-blue-600">
              Section 1202 of the Internal Revenue Code
            </h2> */}
            <h2 className="mt-2 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
              Legal Support Against Solar Companies
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
            <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-4xl">
              Protecting Your Investment
            </h2>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
              One of the primary services we offer is the protection of your
              investment against fraudulent solar companies. This includes
              helping you recover losses from unfulfilled contracts or poorly
              executed installations. We work to ensure you receive compensation
              for any financial harm experienced due to malpractices by solar
              companies.
              <br></br>
              <br></br>
              Our focus is on defending your rights as a consumer. If a solar
              company has misled you or failed to deliver promised services, our
              legal expertise can be instrumental in pursuing your claims. This
              could involve reimbursement for the cost of the solar system,
              additional damages for fraudulent practices, or compensation for
              any consequent property damage.
            </p>
            <div className="mt-10 flex justify-center md:lg:pt-8 pt-0 items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="#email-form"
                className="rounded-md   bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="right-1">
            <Image
              src={image3}
              width="500"
              height="500"
              alt="chart"
              className="solar field"
            />
          </div>
        </div>

        <div className="wrap-2 a">
          <div className="right-1">
            <Image
              src={image4}
              width="500"
              height="500"
              alt="deferal"
              className="law"
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
            <h2 className="text-4xl pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Understanding Your Legal Options
            </h2>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
              It's essential to understand the variety of legal options
              available when dealing with solar company disputes. Our team helps
              in evaluating your case, determining the most effective legal
              strategy, whether it's seeking damages through a lawsuit or
              resolving issues via mediation or arbitration.
              <br />
              <br />
              The legal framework governing solar company contracts and consumer
              rights can be complex, but our expertise ensures that you are well
              informed about your rights and potential courses of action. We
              guide you through each step, from gathering evidence to presenting
              your case, ensuring the best possible outcome.
            </p>
            <div className="mt-10 flex md:lg:pt-8 pt-0 justify-center items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="#email-form"
                className="rounded-md  bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white 8 ">
        <div className="mx-auto max-w-2xl pt-12 pb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Committed to Your Rights
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
            Expert Legal Support Against Solar Companies
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We specialize in providing legal support for clients affected by the
            deceptive practices of solar companies. Our team, composed of
            experienced legal professionals, is committed to ensuring that your
            case is handled with the utmost diligence and expertise, guiding you
            through every step of the legal process. We focus on obtaining fair
            compensation and justice for our clients, addressing issues like
            contract breaches, substandard installations, and fraudulent claims.
          </p>
        </div>

        <div className="w-layout-blockcontainer w-container">
          <h2 className="text-4xl sm:mt-12 pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-3xl">
            Navigating Legal Challenges
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our service goes beyond just representing you in court; we provide a
            comprehensive approach to legal challenges. This includes gathering
            evidence, preparing legal documents, and representing you in
            negotiations or court proceedings. We understand the intricacies of
            solar company contracts and consumer laws, ensuring that your case
            is built on a solid foundation.
          </p>
        </div>

        <div className="w-layout-blockcontainer w-container">
          <h2 className="text-4xl sm:mt-12 pt-8 md:lg:pt-0 font-bold tracking-tight text-gray-900 sm:text-3xl">
            Your Ally in Legal Disputes
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are your ally in seeking justice against unfair practices by
            solar companies. Our commitment is to protect your interests and
            ensure that your voice is heard. We diligently work to secure the
            best possible outcome, whether it involves a financial settlement,
            corrective action, or other forms of legal redress. Trust us to
            stand with you at every step, championing your rights and seeking
            accountability from those who have wronged you.
          </p>
        </div>
      </div>
      <div id="blog-posts" className="blog-posts-section">
        {/* <h2 className="text-4xl font-semibold">Learn About QSBS</h2> */}
        {/* <div className="bg-white px-6 py-24 sm:py-32 lg:px-8"> */}
        {/* <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn About QSBS
          </h2> */}
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
        {/* <BlogPostsGrid posts={limitedPosts} />{" "} */}
        {/* Add BlogPostsGrid with a limit prop */}
      {/* </div> */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to get started?
            <br />
            Tell us about your case.
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

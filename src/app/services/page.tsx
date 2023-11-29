import { ResponsiveImage } from "@/components";
import { populateMetadata } from "@/utils";
import { NextPage } from "next";
import Link from "next/link";
import declineInValueImage from "../../../public/images/decline-in-value.webp";
import officeBuildingConstructionImage from "../../../public/images/office-building-construction.webp";

export const metadata = populateMetadata({
  title: "Property Tax Appeal Services",
  description:
    "Reduce your property taxes with SF Tax Appeal. Expert services for fair assessment.",
});

const ServicesPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer w-container">
      <h1 className="heading-10">
        <strong>Expert Property Tax Appeal Services</strong>
      </h1>
      <div className="w-layout-blockcontainer w-container">
        <div className="columns-2 w-row">
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Comprehensive Tax Appeal Representation:</strong>
              </h1>
            </div>
            <p>
              Our nationwide focus allows us to cater to commercial property
              owners across the United States. We specialize in tax appeal
              representation, offering our expertise in navigating the complex
              landscape of property tax appeals. Our goal is to ensure equitable
              taxation for every commercial property we represent.
            </p>
          </div>
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Assessment Review and Analysis:</strong>
              </h1>
            </div>
            <p>
              We conduct thorough reviews and analyses of property assessments,
              identifying any discrepancies or over-valuations. Our team stays
              abreast of current market trends and valuation methodologies,
              ensuring your property is fairly assessed.
            </p>
          </div>
          {/* <div className="w-col w-col-6 image-6">
            <ResponsiveImage
              src={declineInValueImage}
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="declining value"
            />
          </div> */}
        </div>
        <div className="columns-2 w-row">
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Nationwide Appeal Filing and Management:</strong>
              </h1>
            </div>
            <p>
              Our services include the preparation and filing of tax appeals
              across various jurisdictions. We manage the entire appeal process,
              from initial filing to resolution, ensuring compliance with all
              state-specific regulations and deadlines.
            </p>
          </div>
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Strategic Negotiation with Tax Authorities:</strong>
              </h1>
            </div>
            <p>
              Leveraging our extensive experience, we engage in strategic
              negotiations with tax authorities. Our aim is to secure favorable
              outcomes for our clients, reducing over-assessed property values
              and consequently, the tax burden.
            </p>
          </div>
          {/* <div className="w-col w-col-6 image-6">
            <ResponsiveImage
              src={declineInValueImage}
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="declining value"
            />
          </div> */}
        </div>
        <div className="columns-2 w-row">
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Customized Valuation Appeals:</strong>
              </h1>
            </div>
            <p>
              We understand that each property is unique. Our approach involves
              customizing valuation appeals based on individual property
              characteristics, market conditions, and specific circumstances
              that may impact the property&apos;s value.
            </p>
          </div>
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>
                  Proposition 8 Appeals for Market Value Adjustments:
                </strong>
              </h1>
            </div>
            <p>
              For clients in states like California, we handle Proposition 8
              appeals, ensuring properties are taxed based on their current
              market value, not just their assessed value.
            </p>
          </div>
          {/* <div className="w-col w-col-6 image-6">
            <ResponsiveImage
              src={declineInValueImage}
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="declining value"
            />
          </div> */}
        </div>
        <div className="columns-2 w-row">
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Nationwide Success Fee Structure:</strong>
              </h1>
            </div>
            <p>
              We offer a success-based fee structure, aligning our interests
              with those of our clients. Our fees are contingent upon achieving
              tax reductions for your property, ensuring a risk-free
              partnership.
            </p>
          </div>
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Expertise in Commercial Property Types:</strong>
              </h1>
            </div>
            <p>
              Our team has expertise across a range of commercial property
              types, including office buildings, retail spaces, industrial
              properties, and more. This diverse experience ensures we can
              effectively represent a wide variety of commercial properties.
            </p>
          </div>
          {/* <div className="w-col w-col-6 image-6">
            <ResponsiveImage
              src={declineInValueImage}
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="declining value"
            />
          </div> */}
        </div>
        <div className="columns-2 w-row">
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Regular Communication and Reporting:</strong>
              </h1>
            </div>
            <p>
              We believe in keeping our clients informed. Regular updates and
              reports are provided throughout the appeal process, ensuring
              transparency and understanding of all actions taken on your
              property&apos;s behalf.
            </p>
          </div>
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Long-Term Tax Planning and Advisory:</strong>
              </h1>
            </div>
            <p>
              Beyond the immediate tax appeal, we offer long-term tax planning
              and advisory services to help commercial property owners make
              informed decisions about their properties and potential future tax
              implications.
            </p>
          </div>
          {/* <div className="w-col w-col-6 image-6">
            <ResponsiveImage
              src={declineInValueImage}
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="declining value"
            />
          </div> */}
        </div>
      </div>
      <div className="w-layout-blockcontainer w-container">
        <div className="w-row">
          <div className="w-col w-col-6 image-5">
            {/* <ResponsiveImage
              src={officeBuildingConstructionImage}
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="construction"
            /> */}
          </div>
          {/* <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Supplemental &amp; Base Year Appeals Services</strong>
              </h1>
              <p>
                In today&#x27;s San Francisco real estate tax landscape, many
                homeowners often find discrepancies between their
                property&#x27;s assessed value on their property tax bill and
                the purchase price they paid. If you&#x27;re among the
                homeowners who notice that your assessed value, particularly on
                the secured property tax bill, is higher than the sales price,
                SF Tax Appeal is here to assist. Get in touch with us at (628)
                333-9492 to initiate a supplemental appeal. It&#x27;s essential
                to act swiftly, especially within the vital 60-day window
                following the supplemental notice. Our expertise lies in
                ensuring that you garner the maximum possible refunds.
                Furthermore, for those unaware, a base year appeal can be lodged
                within a span of four years, offering a significant opportunity
                to reduce your property taxes throughout the duration of your
                ownership.
                <br />
                <br />
                Our proficiency extends beyond just contesting overvaluations by
                the county assessor&#x27;s office. At SF Tax Appeal, we pride
                ourselves on our acumen in pinpointing and rectifying valuation
                disputes and taxation anomalies, especially those stemming from
                property transfers or new construction. The goal of a fruitful
                appeal is to realign the assessed value of taxable property with
                the property&#x27;s fair market value, securing consistent
                property tax savings for you as the owner.
                <br />
                <br />
                Understanding the intricacies and enduring benefits of our
                services, our pricing model is transparent and fair. For this
                type of appeal, SF Tax Appeal levies a charge equivalent to 60%
                of the first year&#x27;s tax savings. What sets us apart is our
                commitment to our clients; any subsequent reductions stemming
                from a successful appeal don&#x27;t carry additional charges.
                This stands in stark contrast to some competitors in the market
                who might impose fees amounting to a staggering 100% of the
                first year’s savings.
              </p>
            </div>
          </div> */}
        </div>
        <div className="w-layout-blockcontainer w-container">
          {/* <section>
            <div className="w-layout-blockcontainer w-container">
              <h3>
                <strong>San Francisco Real Estate Tax:</strong>
              </h3>
              <p>
                Navigating the San Francisco real estate tax structure can be
                intricate. Our team provides a comprehensive breakdown of the
                city&#x27;s unique tax system, shedding light on how San
                Francisco&#x27;s tax rates stack up against other regions, both
                locally and nationally. We dive deep into the various factors
                that influence tax rate fluctuations in San Francisco, ensuring
                you have a clear understanding of the local real estate tax
                landscape.
              </p>
            </div>
            <div className="w-layout-blockcontainer w-container">
              <h3>
                <strong>Assessed Value Evaluations:</strong>
              </h3>
              <p>
                Every property has a story, and its assessed value should
                accurately reflect its worth. We offer meticulous evaluations of
                your property&#x27;s assessed value against its prevailing
                market value. By identifying potential overvaluations or
                undervaluations, we ensure that you are not paying more than you
                should. Our team provides actionable recommendations, ensuring
                that the assessed value aligns seamlessly with the
                property&#x27;s true market worth.
              </p>
            </div>
            <div className="w-layout-blockcontainer w-container">
              <h3>
                <strong>San Francisco Property Consultation:</strong>
              </h3>
              <p>
                Owning property in San Francisco comes with its unique set of
                challenges and benefits. Our personalized consultation services
                are tailored to address the city-specific nuances and
                regulations of San Francisco property taxes. From understanding
                different property classifications to grasping their tax
                implications, we offer expert insights to ensure you are
                well-informed and equipped to make optimal decisions.
              </p>
            </div>
            <div className="w-layout-blockcontainer w-container">
              <h3>
                <strong>Property Tax Bill Review:</strong>
              </h3>
              <p>
                A property tax bill can sometimes appear convoluted, with
                various components and charges. Our team provides a thorough
                analysis of your property tax bill, identifying any
                discrepancies or anomalies. We clarify each segment of the bill,
                assisting you in understanding payment timelines, potential
                penalties, and ways to optimize your property tax obligations.
              </p>
            </div>
            <div className="w-layout-blockcontainer w-container">
              <h3>
                <strong>Secured Property Tax Advisory:</strong>
              </h3>
              <p>
                In San Francisco, the concept of &#x27;secured property&#x27;
                has specific tax implications. Our team specializes in offering
                insights into what constitutes &#x27;secured property&#x27; and
                how it impacts your property tax bill. By understanding the
                nuances of secured property tax, property owners can navigate
                challenges more effectively. We provide recommendations and
                strategies to ensure you are well-prepared to manage and
                optimize your secured property tax commitments.
              </p>
            </div>
          </section> */}
          <h2>Next Steps...</h2>
        </div>
      </div>
      <p>
        <strong>To return to the </strong>
        <Link href="/">
          <strong>
            homepage, click here.
            <br />‍
          </strong>
        </Link>
        <strong>To request a </strong>
        <Link href="/">
          <strong>free property review, click here.</strong>
        </Link>
      </p>
    </div>
  );
};

export default ServicesPage;

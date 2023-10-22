import { ResponsiveImage } from '@/components';
import { populateMetadata } from '@/utils';
import { NextPage } from 'next';
import Link from 'next/link';
import declineInValueImage from '../../../public/images/decline-in-value.webp';
import officeBuildingConstructionImage from '../../../public/images/office-building-construction.webp';

export const metadata = populateMetadata({
  title: 'Property Tax Appeal Services',
  description:
    'Reduce your property taxes with SF Tax Appeal. Expert services for fair assessment.',
});

const ServicesPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer w-container">
      <h1 className="heading-10">
        <strong>Expert Property Tax Appeal Services in San Francisco</strong>
      </h1>
      <div className="w-layout-blockcontainer w-container">
        <div className="columns-2 w-row">
          <div className="w-col w-col-6">
            <div className="w-layout-blockcontainer w-container">
              <h1 className="heading-15">
                <strong>Proposition 8 – Decline in Value Appeals:</strong>
              </h1>
            </div>
            <p>
              In the dynamic San Francisco real estate market, it&#x27;s not
              uncommon for property owners to grapple with assessed values that
              surpass the current market values. Such discrepancies might arise
              from inaccuracies in the assessor recorder&#x27;s records,
              misclassification of properties, or even factors like new
              construction that haven&#x27;t been correctly accounted for.
              Thankfully, SF Tax Appeal specializes in navigating these
              challenges, ensuring that homeowners receive accurate property
              assessments that reflect the real market value of their asset. If
              you believe your property tax bill mirrors an over-assessment,
              don&#x27;t hesitate to contact us at (628) 333-9492.
              <br />‍<br />
              San Francisco property owners have Proposition 8 under state law
              to their advantage. This regulation enables them to contest the
              assessed value of their property. Demonstrating that your
              property&#x27;s market value is notably lower than its assessed
              value can compel the county to adjust your property taxes. This
              could mean either a temporary reduction in your upcoming secured
              property tax or a refund for overpayments on prior assessed
              values.
              <br />‍<br />
              SF Tax Appeal stands out for its efficiency in this domain. By
              liaising with the county and the tax collector office, we ensure
              that the property tax rate applied is in sync with the
              property&#x27;s real value. Our commitment to our clients extends
              beyond just services; we champion affordability with a success fee
              of merely 33%. It embodies our core belief of delivering
              cost-effective tax appeal solutions that prioritize our
              clients&#x27; interests. With the fiscal year-end and due dates
              like June 30 approaching, it&#x27;s crucial to address any
              disparities in your tax bill promptly. Let us help you align your
              property&#x27;s assessed value with its true market value.
            </p>
          </div>
          <div className="w-col w-col-6 image-6">
            <ResponsiveImage
              src={declineInValueImage}
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="declining value"
            />
          </div>
        </div>
      </div>
      <div className="w-layout-blockcontainer w-container">
        <div className="w-row">
          <div className="w-col w-col-6 image-5">
            <ResponsiveImage
              src={officeBuildingConstructionImage}
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, (max-width: 991px) 354px, 460px"
              alt="construction"
            />
          </div>
          <div className="w-col w-col-6">
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
          </div>
        </div>
        <div className="w-layout-blockcontainer w-container">
          <section>
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
          </section>
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

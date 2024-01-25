import { ResponsiveImage } from "@/components";
import { populateMetadata } from "@/utils";
import { NextPage } from "next";
import Link from "next/link";
import declineInValueImage from "../../../public/images/decline-in-value.webp";
import officeBuildingConstructionImage from "../../../public/images/office-building-construction.webp";
import './Tailwind.css'

// Metadata for the page
export const metadata = populateMetadata({
  title: 'About Us | QSBS Attestation Letter | Online QSBS Service',
  description:
    'Ensure you never miss out on the valuable tax benefits you are entitled to with Qualified Small Business Stock.',
});

const ServicesPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer w-container">
      <h1 className="heading-10">
        <strong>QSBS Attestation Letter Services</strong>
      </h1>
      <div className="services-section px-5">
        <div className="service">
          {/* <ResponsiveImage src={declineInValueImage} alt="Decline in Value"/> */}
          <div className="service">
  <h2 className="text-xl pb-4 pt-8">Service 1: QSBS Valuation Analysis</h2>
  <p>Our QSBS Valuation Analysis provides an in-depth evaluation of your company's financials to ascertain if your stock qualifies for QSBS. Our experts conduct a thorough review of your business's asset value, revenue streams, and growth potential to ensure compliance with QSBS criteria. This service is essential for businesses aiming to leverage the tax advantages of QSBS.</p>
</div>
<div className="service">
  {/* <ResponsiveImage src={officeBuildingConstructionImage} alt="Office Building Construction"/> */}
  <h2 className="text-xl pb-4 pt-8">Service 2: QSBS Eligibility Consultation</h2>
  <p>We offer specialized QSBS Eligibility Consultation to guide your business through the intricate eligibility requirements for QSBS. Our team provides tailored advice on structuring your business and financial practices to meet the QSBS criteria, ensuring you fully benefit from the tax incentives available for qualified small businesses.</p>
</div>
<div className="service">
  <h2 className="text-xl pb-4 pt-8">Service 3: Complete Attestation Service</h2>
  <p>Our Complete Attestation Service encompasses every aspect of the QSBS attestation process. We handle the documentation, preparation, and submission processes, ensuring your compliance with all regulatory requirements. This comprehensive service guarantees accuracy and adherence to QSBS standards, providing peace of mind and allowing you to focus on your business growth.</p>
      <div className="pt-8 flex justify-center">
      <a href="mailto:info@qsbsletter.com" className=" contact-link text-blue-500 underline">Contact Us for More Information</a>
      </div>
</div>
</div>
</div>


    </div>
  );
};

export default ServicesPage;

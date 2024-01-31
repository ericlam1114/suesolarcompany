import { ResponsiveImage } from "@/components";
import { populateMetadata } from "@/utils";
import { NextPage } from "next";
import Link from "next/link";
import declineInValueImage from "../../../public/images/decline-in-value.webp";
import officeBuildingConstructionImage from "../../../public/images/office-building-construction.webp";
import "./Tailwind.css";

// Metadata for the page
export const metadata = populateMetadata({
  title: "Solar Company Legal Support | Your Ally in Solar Lawsuits",
  description:
    "We offer robust evidence and legal support to demonstrate that your solar company has violated contractual agreements or consumer protection laws.",
});

const ServicesPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer w-container">
      <h1 className="heading-10">
        <strong>Solar Legal Services</strong>
      </h1>
      <div className="services-section px-5">
        <div className="service">
          {/* <ResponsiveImage src={declineInValueImage} alt="Decline in Value"/> */}
          <div className="service">
            <h2 className="text-xl pb-4 pt-8">
              Service 1: Contractual and Financial Review
            </h2>
            <p>
              Our team offers an in-depth review of your contractual agreements
              and financial dealings with the solar company. We scrutinize the
              terms and conditions, payment schedules, and promised deliverables
              to determine any discrepancies or breaches by the solar company.
              This service is vital for clients seeking to understand their
              rights and the extent of any malpractices.
            </p>
          </div>
          <div className="service">
            {/* <ResponsiveImage src={officeBuildingConstructionImage} alt="Office Building Construction"/> */}
            <h2 className="text-xl pb-4 pt-8">
              Service 2: Legal Eligibility and Strategy Consultation
            </h2>
            <p>
              We provide specialized consultation to determine your legal
              standing against a solar company. Our experts offer advice on
              formulating a robust legal strategy, focusing on the unique
              aspects of your case. This includes assessing the potential for
              compensation, understanding the legal process, and preparing for
              possible litigation or settlement negotiations.
            </p>
          </div>
          <div className="service">
            <h2 className="text-xl pb-4 pt-8">
              Service 3: Comprehensive Legal Representation
            </h2>
            <p>
              Our Comprehensive Legal Representation service covers every phase
              of your legal action against a solar company. We manage all
              aspects of your case, from initial filing to representation in
              court or arbitration. This complete service ensures that every
              legal detail is meticulously handled, providing you with the
              assurance that your case against the solar company is being
              pursued with expertise and dedication.
            </p>
            <div className="pt-8 flex justify-center">
              <a
                href="mailto:info@suesolarcompany.com"
                className=" contact-link text-blue-500 underline"
              >
                Contact Us for More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

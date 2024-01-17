import { ResponsiveImage } from "@/components";
import { populateMetadata } from "@/utils";
import { NextPage } from "next";
import Link from "next/link";
import declineInValueImage from "../../../public/images/decline-in-value.webp";
import officeBuildingConstructionImage from "../../../public/images/office-building-construction.webp";


export const metadata = populateMetadata({
  title: 'About Us | QSBS Attestation Letter | Online QSBS Service',
  description:
    'Allow us to assist you with your QSBS attestation needs. Ensure you never miss out on the valuable tax benefits you&apos;re entitled to with Qualified Small Business Stock.',
});

const ServicesPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer w-container">
      <h1 className="heading-10">
        <strong>
        QSBS Attestation Letter Services
        </strong>
      </h1>
    </div>
  );
};

export default ServicesPage;

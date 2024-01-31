import React from "react";
// import '../styles/morgantaxappeals.webflow.css'
import "./Tailwind.css";
import Image from "next/image";
import downloadImage from "../../public/images/check.webp";

export default function Example() {
  return (
    <>
      <div className="column-wrap-1">
        <div className="column-1">
          <h4 className="column-1-title">Full Legal Support</h4>
          <Image
            src={downloadImage}
            width="100"
            height="100"
            alt="green check mark"
            className="icon"
          />

          <p className="paragraph-3">
            Our team provides comprehensive legal support, managing your case
            against the solar company from start to finish.
          </p>
        </div>
        <div className="column-1">
          <h4 className="column-1-title">Industry Knowledge</h4>
          <Image
            src={downloadImage}
            width="100"
            height="100"
            alt="green check mark"
            className="icon"
          />
          <p className="paragraph-3">
            We have deep expertise in solar industry practices and legal
            standards, ensuring informed and effective representation.
          </p>
        </div>
        <div className="column-1">
          <h4 className="column-1-title">
            <>Dedicated Advocacy</>
          </h4>
          <Image
            src={downloadImage}
            alt="green check mark"
            width="100"
            height="100"
            className="icon"
          />
          <p className="paragraph-3">
            Focused exclusively on solar company disputes, we're dedicated to
            staying abreast of the latest legal developments and consumer
            protections.
          </p>
        </div>
      </div>
    </>
  );
}

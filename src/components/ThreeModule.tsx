import React from "react"
// import '../styles/morgantaxappeals.webflow.css'
import './Tailwind.css'
import Image from "next/image";
import downloadImage from "../../public/images/check.webp";

export default function Example() {
    return(<>
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
    We focus 100% on QSBS so we&apos;re on top of the latest laws
    and compliance
  </p>
</div>
</div>
</>
  )
}
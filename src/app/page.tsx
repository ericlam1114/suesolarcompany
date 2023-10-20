import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-wrap">
          <div className="hero-left">
            <h1 className="heading-1">
              <strong className="bold-text">
                San Francisco Property Tax Appeal
              </strong>
            </h1>
            <p className="subhead-1">
              <strong className="bold-text-2">
                We&#x27;ll help you challenge your San Francisco commercial
                property assessment appeal.
              </strong>
            </p>
          </div>
          <div className="hero-right">
            <div className="w-layout-blockcontainer w-container">
              <div className="w-form">
                <div>
                  <h2 className="heading-6">Let&#x27;s work together</h2>
                  <p className="paragraph-6">
                    Get a free tax review for your commercial property
                  </p>
                </div>
                {/* <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-2" data-wf-page-id="64b05eb67dd5ad782067b183" data-wf-element-id="31fe84d0-71ef-2318-9eb1-67d6283decd0">
              <div className="w-layout-grid grid">
                <div id="w-node-_96684179-3191-d52e-88cc-e64db9c9f918-2067b183"><input type="text" className="w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="First Name*" id="First-Name" required=""/><input type="text" className="w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email*" id="Email-2" required=""/><input type="text" className="w-input" maxlength="256" name="Job-Title" data-name="Job Title" placeholder="Job Title*" id="Job-Title" required=""/></div>
                <div id="w-node-_44dfb7e2-574e-0d86-2998-c65358b9a5df-2067b183"><input type="text" className="w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Last Name*" id="Last-Name" required=""/><input type="text" className="w-input" maxlength="256" name="Company" data-name="Company" placeholder="Company*" id="Company" required=""/><input type="text" className="w-input" maxlength="256" name="Phone" data-name="Phone" placeholder="Phone*" id="Phone" required=""/></div>
              </div><textarea required="" placeholder="How can we help you?*" maxlength="5000" id="How-can-we-help-you" name="How-can-we-help-you" data-name="How can we help you?" className="w-input"/></textarea>
              <div className="div-block"><input type="submit" value="Submit" data-wait="Please wait..." className="submit-button-2 w-button"/></div>
            </form> */}
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="class-section">
        <div className="wrap-2 a">
          <div className="left-1">
            <h2 className="heading-2">
              Save money on your commercial property tax
            </h2>
            <p className="paragraph-2">
              In today&#x27;s economy, managing property tax assessments are
              crucial to minimizing overhead. With recent market value
              depreciations in the San Francisco commercial real estate market,
              there&#x27;s a high likelihood you should be paying less.
            </p>
            <a href="#email-form" className="button-2 w-button">
              Free Tax Review
            </a>
          </div>
          <div className="right-1">
            <Image
              src="/images/sfcorner.webp"
              alt="commercial property tax appeals"
              sizes="(max-width: 479px) 73vw, 300px"
              srcset="images/sfcorner-p-500.png 500w, images/sfcorner-p-800.png 800w, images/sfcorner.webp 1024w"
              width="300"
              height="300"
              className="screenshot"
            />
          </div>
        </div>
        <div className="wrap-2 b">
          <div className="left-2">
            <Image
              src="/images/sf.webp"
              width="300"
              height="300"
              alt="tax appeals san francisco"
              className="screenshot"
            />
          </div>
          <div className="right-2">
            <h2 className="heading-2">Done-for-you tax appeal</h2>
            <h4 className="heading-3">Here&#x27;s what you get...</h4>
            <p className="paragraph-2">
              Experience streamlined appeals and accurate obligations with our
              San Francisco expertise, committed to achieving lower assessments
              for your commercial properties.
            </p>
            <a href="#email-form" className="button-2 w-button">
              Free Tax Review
            </a>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="wrap-1">
          <h2 className="heading-3">
            <strong>Why San Francisco Tax Appeal?</strong>
          </h2>
          <p className="subhead-3">
            Leveraging San Francisco commercial real estate acumen we maximize
            savings for our clients.
          </p>
          <div className="column-wrap-1">
            <div className="column-1">
              <h4 className="column-1-title">Done-For-You</h4>
              <Image
                src="/images/download.png"
                width="100"
                height="100"
                alt="green check mark"
                className="icon"
              />
              <p className="paragraph-3">
                We&#x27;ll handle the entire tax appeal process end-to-end
              </p>
            </div>
            <div className="column-1">
              <h4 className="column-1-title">San Francisco Native</h4>
              <Image
                src="/images/download.png"
                width="100"
                height="100"
                alt="green check mark"
                className="icon"
              />
              <p className="paragraph-3">
                Local representation and deep industry expertise
              </p>
            </div>
            <div className="column-1">
              <h4 className="column-1-title">
                <strong>Commitment Free</strong>
              </h4>
              <Image
                src="/images/download.png"
                alt="green check mark"
                width="100"
                height="100"
                className="icon"
              />
              <p className="paragraph-3">
                No upfront costs and no fees until savings have been achieved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="wrap-3">
          <h2 className="heading-5">
            Find out how much you could <strong>save</strong> on your{' '}
            <strong>commercial property taxes</strong>
          </h2>
          <div className="div-block-2">
            <a href="#email-form" className="button-2 w-button">
              Free Tax Review
            </a>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-20">We&#x27;re Your Partner</h2>
          <p className="paragraph-10">
            For property owners who believe their commercial spaces have been
            unjustly assessed, the Assessment Appeals Board offers a formal
            channel for appeal. We provide independent tax representatives to
            guide you through the intricate appeals board process, ensuring a
            timely filed assessment appeal application. Our California licensed
            attorneys and licensed real estate appraisers are committed to
            challenging the assessed value of your property, aiming to lower
            your tax bill as mandated by the assessor&#x27;s office for the
            current tax year.
          </p>
        </div>
        <div className="w-layout-blockcontainer w-container">
          <h2 className="heading-21">
            We Help You Navigate Your Commercial Appeal
          </h2>
          <p className="paragraph-11">
            When you work with us, you&#x27;re not just another San Francisco
            tax filer— you&#x27;re a valued client deserving personalized
            attention. We manage all the complexities of the formal appeal
            process, from filing period deadlines to gathering all necessary
            documents. Our expertise includes dealing with the county assessed
            properties division, utilizing fair market value and factored base
            year value to scrutinize your property&#x27;s taxable value. We
            operate within business hours and work with the hearing officers at
            the Assessment Appeals Board to ensure that your appeal is
            considered timely and heard at the earliest available hearing date.
          </p>
        </div>
      </div>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-2 w-nav"
      >
        <div className="footer-top">
          <div className="footer-top-wrap">
            <div className="footer-link-wrap">
              <a href="mailto:sftaxappeals@gmail.com" className="footer-link">
                Contact
              </a>
              <a
                href="privacy-policy-terms-and-conditions.html"
                className="footer-link"
              >
                Privacy
              </a>
              <a
                href="privacy-policy-terms-and-conditions.html"
                className="footer-link"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="legal">71 Stevenson St, San Francisco, CA 94105</div>
        <div className="footer-bottom-wrap">
          <div className="legal">
            © 2017, SFTaxAppeal, LLC. All Rights Reserved.{' '}
          </div>
        </div>
      </div>
    </>
  );
}

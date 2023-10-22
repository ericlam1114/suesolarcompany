import { HeroSection } from '@/components';
import Image from 'next/image';
import downloadImage from '../../public/images/download.png';
import sfImage from '../../public/images/sf.webp';
import sfCornerImage from '../../public/images/sfcorner.webp';

export default function Home() {
  return (
    <>
      <HeroSection />
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
              src={sfCornerImage}
              width="300"
              height="300"
              alt="commercial property tax appeals"
              className="screenshot"
            />
          </div>
        </div>
        <div className="wrap-2 b">
          <div className="left-2">
            <Image
              src={sfImage}
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
                src={downloadImage}
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
                src={downloadImage}
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
                src={downloadImage}
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
    </>
  );
}

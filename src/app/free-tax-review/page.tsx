import { ContactForm } from '@/components';
import { populateMetadata } from '@/utils';
import { NextPage } from 'next';

export const metadata = populateMetadata({
  title: 'Free Tax Review',
  description:
    'Get a free review of your commercial property tax. Save money with our appeal service!',
});

const FreeTaxReviewPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer container-7 w-container">
      <h1 className="heading-16">
        <strong>Free Tax Review</strong>
      </h1>
      <div className="w-layout-blockcontainer w-container">
        <h2>Free Tax Review</h2>
        <p>
          At SF Tax Appeal, we make the commercial property tax appeal process
          easy, efficient, and cost-effective. In just two business days, our
          team of experts will review your property taxes, prepare a concise
          report, and provide a comprehensive consultation - all for free.
          <br />
          <br />
          <strong>Save Time:</strong> We streamline the process, providing you
          with a clear and concise report on the viability of your tax appeal,
          saving you from the exhaustive process of property evaluation,
          document compilation, negotiation with the Assessor’s Office, and
          presenting your case to the Assessment Appeals Board.
          <br />
          <br />
          <strong>Save Money:</strong> Our no-cost, no-risk review assesses your
          current property taxes to identify potential savings. We&#x27;ll let
          you know if your property is over-assessed and if appealing could
          result in tax refunds, saving you unnecessary application fees that
          range from $30 to $1,000 per parcel.
          <br />
          <br />
          <strong>Expertise:</strong> Our professional tax consultants
          specialize in reviewing commercial real estate taxes, including auto
          dealerships, offices, and retail properties. We also have extensive
          experience with hospitality, industrial, apartments, mixed-use and
          unique properties. We typically handle properties with an assessed
          value of over $5,000,000.
          <br />
          <br />
          <strong>Privacy:</strong> Request a free property review today at{' '}
          <a href="mailto:info@sftaxappeal.com" target="_new">
            <strong>info@sftaxappeal.com</strong>
          </a>{' '}
          or call us at (628) 333-9492. We&#x27;ll provide a preliminary
          estimate of your property’s market value and compare it to your
          assessed value. We’ll then make a recommendation about whether an
          appeal would be beneficial. Your information will always remain
          confidential - no marketing materials will be sent to you or your
          property. Experience the SF Tax Appeal difference today.
        </p>
      </div>
      <h2>Free Tax Review Application</h2>
      <p>
        Explore our free tax review application designed to help commercial
        property owners identify potential tax overpayments. This user-friendly,
        interactive tool dives deep into your current tax liabilities, evaluates
        your assessment, and points out areas where you might be eligible for
        savings. Using advanced algorithms and an in-depth understanding of tax
        laws, our application provides insights that could lead to significant
        reductions in your commercial property taxes. Apply now for a
        comprehensive tax review and embark on a journey towards cost-efficient
        property ownership.
      </p>
      <div className="div-block-7">
        <div className="hero-right">
          <ContactForm />
        </div>
      </div>
      <h3>Terms and Conditions</h3>
      <p>
        At SF Tax Appeal, we offer preliminary evaluations to determine your
        property&#x27;s fair market value. Based on this evaluation, we provide
        a written report advising whether we recommend filing a tax appeal. We
        rely on the accuracy of information given by the applicant and other
        data sources, and cannot be held responsible for any inaccuracies.
        <br />
        <br />
        We reserve the right to decline free assessment reviews for applications
        we deem fraudulent, frivolous, excessive, incomplete, or misleading. SF
        Tax Appeal provides this service without any warranties. We are not
        legally obligated to represent the applicant in their property tax
        appeals unless there is a signed client agreement in place.
      </p>
    </div>
  );
};

export default FreeTaxReviewPage;

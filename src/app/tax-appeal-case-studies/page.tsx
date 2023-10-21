import { populateMetadata } from '@/utils';
import { NextPage } from 'next';

export const metadata = populateMetadata({
  title: 'Tax Appeal Case Studies',
  description:
    'Discover how SF Tax Appeal has helped numerous businesses save on commercial property taxes. Dive into our case studies for examples.',
});

const CaseStudiesPage: NextPage = () => {
  return (
    <div className="w-layout-blockcontainer container-8 w-container">
      <h1 className="heading-17">
        <strong className="bold-text-4">
          Case Studies in Commercial Property Tax Savings
        </strong>
      </h1>
      <h2 className="heading-18">
        Case Study 1: Leading Retail Chain Gains $400,000+ Annual Savings with
        SF Tax Appeal
      </h2>
      <p className="paragraph-8">
        A prominent retail chain engaged SF Tax Appeal to scrutinize their
        California locations for over-assessment and to secure successful tax
        appeals. The company executives applauded our diligence, innovation, and
        resourcefulness, which significantly contributed to their goals. By
        outsourcing tax appeal services, the company saved both time and money.
        Prioritizing appeals led to an 80% reduction in time spent.
      </p>
      <h2 className="heading-18">
        Case Study 2: Major Department Store Chain Reaps $6,000,000 in Property
        Tax Refunds
      </h2>
      <p className="paragraph-8">
        SF Tax Appeal was hired by a notable department store chain to tackle a
        backlog of assessment appeals, yielding $6,000,000 in property tax
        refunds. Merely days after engagement, SF Tax Appeal presented a
        valuation and secured a reduction on the company&#x27;s first appeal.
        The decision to outsource tax appeal operations provided the company
        with financial savings, time efficiencies, and relief. The company
        executives were impressed with SF Tax Appeal&#x27;s success in winning
        appeals that their internal team previously failed to secure.
      </p>
      <h2 className="heading-18">
        Case Study 3: Global Business Headquartered in California Saves
        $500,000+
      </h2>
      <p className="paragraph-8">
        A globally-operating business, with its headquarters based in
        California, collaborated with SF Tax Appeal to secure more than $500,000
        in property tax savings. The company&#x27;s real estate portfolio
        comprises a campus, office buildings, and vacant land.
      </p>
      <h2 className="heading-18">
        Case Study 4: Hotel Owner Saves $500,000+ by Resolving a Base Year
        Appeal
      </h2>
      <p className="paragraph-8">
        During the Great Recession, a hotelier purchased a property for around
        $17M. The Assessor’s office, however, assessed the property at double
        the purchase price, severely hampering the hotel&#x27;s cash flow and
        profitability. SF Tax Appeal was enlisted as the agent and successfully
        negotiated tax refunds amounting to approximately $575,000 for the
        hotelier.
      </p>
      <h2 className="heading-18">
        Case Study 5: Real Estate Developer Secures $250,000+ in Refunds
      </h2>
      <p className="paragraph-8">
        A real estate developer engaged SF Tax Appeal to review their portfolio,
        leading to assessment reductions for 17 properties and over $250,000 in
        refunds. The portfolio comprised various commercial properties and
        vacant land. Through diligent property tours, valuation preparations,
        and successful negotiations, SF Tax Appeal was able to win appeals,
        yielding substantial refunds for the developer.
      </p>
    </div>
  );
};

export default CaseStudiesPage;

import Image from 'next/image';
import ericLamImage from '../../../public/images/eric-lam.webp';
import founder from '../../../public/images/Mike.webp';

const FounderProfile = () => {
  return (<>
    <div className=" items-start my-8">
      <div className="founder-image mr-8">
        <Image
          src={founder}
          alt="Michael Garcia"
          width={400} // Adjust to your image's aspect ratio
          height={400} // Adjust to your image's aspect ratio
          className=""
        />
      </div>
      <div className="founder-description">
        <h2 className="text-3xl font-bold mb-4">Michael Garcia</h2>
        <h3 className="text-xl font-semibold mb-2">Certified Public Accountant</h3>
        <p className="text-base">
        Michael Garcia, our esteemed Certified Public Accountant, brings a wealth of financial acumen to the helm of QSBS Letter. With a seasoned background in accounting and a sharp eye for strategic tax planning, Michael&#39;s expertise is pivotal to our operation. His journey in finance has been marked by a keen understanding of the QSBS landscape, ensuring our clients benefit from every available tax advantage. Michael&#39;s approach combines rigorous analysis with personalized service, making the complex QSBS attestation process both understandable and accessible for our clientele. His commitment to excellence and ethical practice stands as a cornerstone of our firm&#39;s reputation.
        </p>
      </div>
    </div>
    <div className="founder-profile  items-start my-8">
      <div className="founder-image mr-8">
        <Image
          src={ericLamImage}
          alt="Eric Lam"
          width={300} // Adjust to your image's aspect ratio
          height={300} // Adjust to your image's aspect ratio
          className=""
        />
      </div>
      <div className="founder-description">
        <h2 className="text-3xl font-bold mb-4">Eric Lam</h2>
        <h3 className="text-xl font-semibold mb-2">Head of Business Strategy</h3>
        <p className="text-base">
        Eric Lam is the visionary Head of Business Strategy at QSBSLetter, where his innovative strategies and technological prowess drive our mission to empower investors in the QSBS ecosystem. His extensive background in software development and SEO strategy equips him with the unique ability to identify and bridge market gaps, ensuring our clients maximize their QSBS tax benefits.
        </p>
      </div>
    </div>
    </>
  );
};

export default FounderProfile;

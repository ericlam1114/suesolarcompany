import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import DesignImage from '../../public/images/criteria.webp'
const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Section 1202 of the Internal Revenue Code
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Why Do You Need QSBS Attestation Letter?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Attestation letters are a defensible tool that ensures compliance with IRS regulations and validates the
            taxpayer&apos;s claim for QSBS benefits, thereby acting as a supportive
            document during audits. Founders and Investors request this letter as proof that
            their investment meets the necessary criteria for expected tax
            benefits, making it an integral component of legal and financial due
            diligence in QSBS transactions.
          </p>
          <div className="pt-8">
         <a
              href="/blog"
              className="text-sm  font-semibold leading-6 text-blue-600"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
            </div>
        </div>
      </div>
      {/* <div className="relative overflow-hidden pt-16"> */}
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
        {/* <div className=" px-6 py-24 sm:py-32 lg:px-8"> */}
      {/* <div className="mx-auto max-w-2xl text-center"> */}
        {/* <h2 className="text-3xl font-bold tracking-tight text-black sm:text-6xl">Needed From You...</h2> */}
       
      {/* </div> */}
    {/* </div> */}
        {/* <Image
                src={DesignImage}
                width={2432}
                height={1442}
                alt="green check mark"
                className="icon"

              /> */}
          {/* <img
src={DesignImage}
            alt="criteria"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          /> */}
          {/* <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div> */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        {/* <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl> */}
      </div>
     </div>
  );
}

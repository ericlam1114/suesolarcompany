const timeline = [
  {
    description: "Gather Client Information.",
    date: "Step 1",
  },
  {
    description: "Review Company Qualifications.",
    date: "Step 2",
  },
  {
    description: "Draft the Attestation Letter.",
    date: "Step 3",
  },
  {
    description: "Client Approval.",
    date: "Step 4",
  },
  {
    description: "Legal and Financial Review.",
    date: "Step 5",
  },
  {
    description: "Finalize and Sign the Letter.",
    date: "Step 6",
  },
  {
    description: "Ongoing Monitoring.",
    date: "Step 7",
  },
  
];

export default function Example() {
  return (
    <>
      <div className="bg-white pt-36">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Series of steps to ensure the document is accurate, comprehensive, and compliant with the relevant tax laws. This is a general guideline:
          </p>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.description}>
                <time
                  dateTime={item.description}
                  className="flex items-center text-sm font-semibold leading-6 text-blue-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
             
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

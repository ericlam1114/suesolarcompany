import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-blue-600">Introducing</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">QSBS Online Qualification Calculator</h1>
        <p className="mt-6 text-xl leading-8">
        Using the free QSBS (Qualified Small Business Stock) Calculator is straightforward and user-friendly. Here&apos;s a guide on how to effectively use the calculator to estimate potential tax benefits under the QSBS rules:
        </p>
        <div className="mt-10 max-w-2xl">
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Instructions</h2>
          {/* <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p> */}
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Step 1:</strong> Scroll down the page to the QSBS Calculator. It should be prominently featured and easy to find.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Step 2:</strong> Enter the date on which you acquired the stock. This date is crucial as it marks the beginning of the holding period. The stock must be held for at least 5 years to qualify for QSBS benefits.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Step 3:</strong> Input the date when you sold the stock. This information is used to calculate the holding period and to determine if the stock meets the QSBS 5-year holding requirement.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Step 4:</strong> In the field labeled &apos;Purchase Price,&apos; enter the amount you paid for the stock. This is your basis in the stock and is used to calculate the capital gain and potential QSBS exclusion.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Step 5:</strong> In the &apos;Sale Price&apos; field, input the amount for which you sold the stock. This figure is used to calculate your capital gain.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Step 6:</strong> After filling in all the fields, click the &apos;Calculate&apos; button. The calculator will process your inputs and provide an estimation of your holding period, capital gain, QSBS exclusion amount, and taxable gain.

              </span>
            </li>
          </ul>
          {/* <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
          </p> */}
          {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">From beginner to expert in 3 hours</h2>
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                tristique.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Marketing Manager
              </div>
            </figcaption>
          </figure> */}
          {/* <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p> */}
        </div>
        {/* <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure> */}
        {/* <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In
            amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
            Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat
            ac. Cras fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p>
        </div> */}
      </div>
    </div>
  )
}
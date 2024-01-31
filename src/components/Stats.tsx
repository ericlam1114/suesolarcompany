import React from "react"
import '../styles/morgantaxappeals.webflow.css'
import './Tailwind.css'


const stats = [
    { id: 1, name: 'the year when QSBS became law', value: '1993' },
    { id: 3, name: 'of U.S. small businesses qualify', value: '90%' },
    { id: 2, name: 'in capital gains, 100% tax free', value: '$10 million' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white  ">
         <div className="bg-white px-6 py-24  lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-blue-600">We will help you</p>
        <h2 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sue Your Solar Company</h2>
        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p> */}
      </div>
    </div>
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    )
  }
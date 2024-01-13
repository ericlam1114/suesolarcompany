import React from "react"
import '../styles/morgantaxappeals.webflow.css'
import './Tailwind.css'


const stats = [
    { id: 1, name: 'Capital gains tax rate for federal purposes', value: '0%' },
    { id: 2, name: 'Tax free for your business', value: '$10 million' },
    { id: 3, name: 'Of U.S. businesses are small businesses', value: '99.9%' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
        </div>
      </div>
    )
  }
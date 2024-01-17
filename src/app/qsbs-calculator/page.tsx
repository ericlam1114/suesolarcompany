'use client'

import { useState } from 'react';
import Head from 'next/head';
import Feature from '../../components/CalculatorFeature';
import '../../styles/normalize.css';
import '../../styles/webflow.css';
import '../../styles/morgantaxappeals.webflow.css';
import '../globals.css';
import '../../components/Tailwind.css';

interface CalculatorResults {
  holdingPeriod: number;
  capitalGain: number;
  exclusionAmount: number;
  taxableGain: number;
  estimatedTax: number | null;
  isEligible: boolean;
}

const Calculator = () => {
  const [purchaseDate, setPurchaseDate] = useState('');
  const [saleDate, setSaleDate] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [taxRate, setTaxRate] = useState('');
  const [results, setResults] = useState<CalculatorResults>({
    holdingPeriod: 0,
    capitalGain: 0,
    exclusionAmount: 0,
    taxableGain: 0,
    estimatedTax: null,
    isEligible: false
  });

  const calculateQSBS = () => {
    const purchase = new Date(purchaseDate);
    const sale = new Date(saleDate);

    const purchaseTimestamp = purchase.getTime();
    const saleTimestamp = sale.getTime();

    const holdingPeriod = (saleTimestamp - purchaseTimestamp) / (1000 * 60 * 60 * 24 * 365); // Convert to years
    const isEligible = holdingPeriod >= 5;
    const capitalGain = isEligible ? salePrice - purchasePrice : 0;
    const exclusionLimit = Math.max(10 * purchasePrice, 10000000);
    const exclusionAmount = isEligible ? Math.min(capitalGain, exclusionLimit) : 0;
    const taxableGain = isEligible ? capitalGain - exclusionAmount : 0;
    const estimatedTax = taxRate && taxableGain ? taxableGain * (parseFloat(taxRate) / 100) : null;

    setResults({
      holdingPeriod,
      capitalGain,
      exclusionAmount,
      taxableGain,
      estimatedTax,
      isEligible
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Free QSBS Calculator | See if you qualify for QSBS</title>
        <meta
          name="description"
          content="Use the free QSBS calculator to see if you are on the road to qualifying for QSBS."
        />
      </Head>
      <h1 className="heading-10">
        <strong>Free QSBS Calculator</strong>
      </h1>
      <Feature />
      <h1 className="text-2xl font-bold mb-4 flex justify-center">QSBS Calculator</h1>
      <div className="flex justify-center">
        <div>
          <label className="block mb-2">Purchase Date:</label>
          <input
            type="date"
            className="p-2 border rounded w-full mb-4"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
          />
          <label className="block mb-2">Sale Date:</label>
          <input
            type="date"
            className="p-2 border rounded w-full mb-4"
            value={saleDate}
            onChange={(e) => setSaleDate(e.target.value)}
          />
          <label className="block mb-2">Purchase Price:</label>
          <input
            type="number"
            className="p-2 border rounded w-full mb-4"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
          />
          <label className="block mb-2">Sale Price:</label>
          <input
            type="number"
            className="p-2 border rounded w-full mb-4"
            value={salePrice}
            onChange={(e) => setSalePrice(parseFloat(e.target.value))}
          />
          <label className="block mb-2">
            Capital Gains Tax Rate (%):
            <span className="tooltip">ℹ️
              <span className="tooltiptext">
                Enter your capital gains tax rate here. Find this on your tax return or consult a tax professional. If unsure, leave blank.
              </span>
            </span>
          </label>
          <input
            type="number"
            className="p-2 border rounded w-full mb-4"
            placeholder="Enter tax rate if known"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={calculateQSBS}
          >
            Calculate
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold flex justify-center">Results:</h2>
        <p className="flex justify-center">Holding Period: {results.holdingPeriod.toFixed(2)} years</p>
        {results.isEligible ? (
          <>
            <p className="flex justify-center">Potential Capital Gain: ${results.capitalGain.toFixed(2)}</p>
            <p className="flex justify-center">Estimated Exclusion Amount: ${results.exclusionAmount.toFixed(2)}</p>
            <p className="flex justify-center">Estimated Taxable Gain: ${results.taxableGain.toFixed(2)}</p>
            {results.estimatedTax !== null && (
              <p className="flex justify-center">Estimated Tax on Gain: ${results.estimatedTax.toFixed(2)}</p>
            )}
            <p className="flex justify-center text-green-500">You may qualify for QSBS!</p>
          </>
        ) : (
          <p className="flex justify-center text-red-500">This stock does not meet the QSBS 5-year holding requirement.</p>
        )}
      </div>
    </div>
  );
}

export default Calculator;

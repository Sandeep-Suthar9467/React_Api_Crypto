import React, { useEffect, useState } from 'react';
import './Calculator.css';
import convert from 'crypto-convert';
import CurrencyRow from './CurrencyRow';

export default function Calculator() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('btc');
  const [toCurrency, setToCurrency] = useState('btc');
  const [amount, setAmount] = useState(1);

  const [amountInFromCurrency, setAmountInFromCurrency] = useState(false);
  const [output, setOutput] = useState();

let fromAmount;
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

  useEffect(() => {
        const data = convert;
      
        Object.keys(data).shift();
        setCurrencyOptions([...Object.keys(data)]);
        
        currencyOptions.shift();
        let toAmount; let fromAmount;

          fromAmount = amount;
          toAmount = new convert.from(fromCurrency).to(toCurrency).amount(amount);
          setOutput(toAmount);
  }, [fromCurrency, toCurrency, amount]);
  console.log(currencyOptions)

  removeItemOnce(currencyOptions, 'isReady')

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

   return (

     <>
       <div className="calci_container">
         <h1>Convert</h1>
         <CurrencyRow
           currencyOptions={currencyOptions}
           selectedCurrency={fromCurrency}
           onChangeCurrency={(e) => setFromCurrency(e.target.value)}
           onChangeAmount={handleFromAmountChange}
           amount={fromAmount}
         />
         <div className="equals">=</div>
         <div>
           <input type="number" className="input" disabled value={amountInFromCurrency ? output : 0} />
           <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
             {currencyOptions.map((option) => (
               <option key={option} value={amountInFromCurrency ? option: null}>{amountInFromCurrency ? option: null}</option>
        ))}
           </select>
         </div>
       </div>

     </>
  );
}


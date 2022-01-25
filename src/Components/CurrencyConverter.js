import ExchangeRate from "./ExchangeRate"
import { useState } from "react"
import axios from 'axios'

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState(null)
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState(null)
  const [amount, setAmount] = useState(1)
  
  const convert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {to_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': '41cf5eedf6msh5583b3448e7ebf3p1f6b56jsn1207e41a3e3c'
    }
  }
    
    axios.request(options).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }
  
  return (
    <div className="input-box">
      <div className="currency-converter">
       <h2>CurrencyConverter</h2>

        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input 
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select 
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                  
                  
                {currencies.map(( currency, _index) =>(<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input 
                  type="number"
                  name="currency-amount-2"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                  {currencies.map(( currency, _index) =>(<option key={_index}>{currency}</option>))} 
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-button" onClick={convert}>Convert</button>

        <ExchangeRate />
      </div>
      </div>
  )
}

export default CurrencyConverter
import ExchangeRate from "./ExchangeRate"

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']


  return (
    <div className="input-box">
      <div className="currency-converter">
       <h2>CurrencyConverter</h2>

        <table>
          <body>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input 
                  type="number"
                  name="currency-amount-1"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={""}
                  name="currency-option-1"
                  className="currency-options"
                  >
                  <option></option>  
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
                  value={""}
                  name="currency-option-2"
                  className="currency-options"
                  >
                  <option></option>  
                </select>
              </td>
            </tr>
          </body>
        </table>

        <ExchangeRate />
      </div>
      </div>
  )
}

export default CurrencyConverter
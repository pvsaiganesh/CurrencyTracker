// Write your JS code here
import './index.css'
import {Component} from 'react'

class CryptoCurrencyItem extends Component {
  render() {
    const {cryptoCurrencyData} = this.props
    const {
      currencyLogoUrl,
      currencyName,
      usdValue,
      euroValue,
    } = cryptoCurrencyData
    return (
      <li className="row">
        <img className="logo" src={currencyLogoUrl} alt={currencyName} />
        <h1 className="white">{currencyName}</h1>
        <p className="white">{usdValue}</p>
        <p className="white">{euroValue}</p>
      </li>
    )
  }
}
export default CryptoCurrencyItem

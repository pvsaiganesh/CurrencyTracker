// Write your JS code here
import {Component} from 'react'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrenciesList extends Component {
  render() {
    const {cryptoCurrenciesData} = this.props
    return (
      <ul>
        {cryptoCurrenciesData.map(cryptoCurrencyData => (
          <CryptoCurrencyItem
            key={cryptoCurrencyData.id}
            cryptoCurrencyData={cryptoCurrencyData}
          />
        ))}
      </ul>
    )
  }
}
export default CryptoCurrenciesList

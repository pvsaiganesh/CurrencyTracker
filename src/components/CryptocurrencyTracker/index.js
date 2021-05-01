// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptoCurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {data: [], loader: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const totalData = await response.json()
    const newData = totalData.map(data => ({
      id: data.id,
      currencyLogoUrl: data.currency_logo,
      currencyName: data.currency_name,
      usdValue: data.usd_value,
      euroValue: data.euro_value,
    }))
    this.setState({data: newData, loader: false})
  }

  render() {
    const {data, loader} = this.state
    return (
      <div className="black">
        {loader ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <div className="bg">
            <h1 className="text">CryptocurrencyTracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="Cryptocurrency Tracker"
            />
            <CryptoCurrenciesList cryptoCurrenciesData={data} />
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker

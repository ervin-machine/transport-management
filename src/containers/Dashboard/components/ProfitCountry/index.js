import React from 'react'
import ProfitCountryChart from '../../../PublicComponents/ProfitCountryChart'

function ProfitCountry() {
  return (
    <div className='profit-country-content'>
      <p className='profit-country-title'>Profit by Country</p>
        <ProfitCountryChart />
    </div>
  )
}

export default ProfitCountry
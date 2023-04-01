import React from 'react'
import ProfitStatusCard from '../../../PublicComponents/ProfitStatusCard'

function ProfitStatus() {
  return (
    <div className='profit-status-container'>
        <p>Time period: Last Month</p>
        <ProfitStatusCard title="Revenue" price="824,217" percentage="-4" />
        <ProfitStatusCard title="Costs" price="255,507" percentage="-4" />
        <ProfitStatusCard title="Profit" price="568,710" percentage="-4" />
        <ProfitStatusCard title="Shipments" price="512" percentage="-4" />
        <ProfitStatusCard title="Avg Delivery Time" price="6.8h" percentage="-4" />
    </div>
  )
}

export default ProfitStatus
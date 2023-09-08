import React from 'react'
import AvgTimeDeliveryChart from '../../../PublicComponents/AvgTimeDeliveryChart'

function AvgTimeDelivery() {
  return (
    <div className='avg-time-delivery-content'>
      <p className='avg-delivery-time-title'>Average Delivery Time</p>
        <AvgTimeDeliveryChart />
    </div>
  )
}

export default AvgTimeDelivery
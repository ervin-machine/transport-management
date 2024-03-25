import React from 'react'
import AvgRouteDeliveryChart from '../../../PublicComponents/AvgRouteDeliveryChart'

function AvgDevliveryRoute() {
  return (
    <div className='avg-delivery-route-content'>
        <p className='avg-delivery-route-title'>Average Delivery Route</p>
        <AvgRouteDeliveryChart />
    </div>
  )
}

export default AvgDevliveryRoute
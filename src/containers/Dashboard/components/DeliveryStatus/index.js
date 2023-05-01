import React from 'react'
import DeliveryCardStatus from '../../../PublicComponents/DeliveryCardStatus'
import FleetStatusChart from '../../../PublicComponents/FleetStatusChart'

function DeliveryStatus() {
  return (
    <div>
        <DeliveryCardStatus>
            <FleetStatusChart />
        </DeliveryCardStatus>
    </div>
  )
}

export default DeliveryStatus
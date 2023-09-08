import React from 'react'
import DeliveryCardStatus from '../../../PublicComponents/DeliveryCardStatus'
import DeliveryStatusChart from '../../../PublicComponents/DeliveryStatusChart'
import DeliveryCountryStatusChart from '../../../PublicComponents/DeliveryCountryStatusChart'

function DeliveryStatus() {
  return (
    <div style={{ display: "flex" }}>
        <DeliveryCardStatus>
            <p>Delivery Status</p>
            <DeliveryStatusChart />
            <div style={{ display: "flex" }}>
                <div>
                    <p>Within Time Limit</p>
                    <p>Out of Time Limit</p>
                </div>
                <div style={{ marginLeft: "30px"}}>
                    <p>502</p>
                    <p>6</p>
                </div>
            </div>
        </DeliveryCardStatus>
        <DeliveryCardStatus>
        <p className='delivery-by-country-title'>Deliveries by Counrties</p>
            <DeliveryCountryStatusChart />
            <div style={{ display: "flex" }}>
                <div>
                    <p>Germany</p>
                    <p>France</p>
                    <p>Switzerland</p>
                </div>
                <div style={{ marginLeft: "30px"}}>
                    <p>35%</p>
                    <p>25%</p>
                    <p>21%</p>
                </div>
            </div>
        </DeliveryCardStatus>
    </div>
  )
}

export default DeliveryStatus
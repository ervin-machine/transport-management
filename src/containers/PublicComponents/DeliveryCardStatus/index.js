import React from 'react'
import "./DeliveryCardStatus.css"

function DeliveryCardStatus({ children }) {
  return (
    <div className='delivery-card-status-content'>
        {children}
    </div>
  )
}

export default DeliveryCardStatus
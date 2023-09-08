import React from 'react'
import "./FleetCardStatus.css"

function FleetCardStatus({ children }) {
  return (
    <div className='fleet-card-status-content'>
        {children}
    </div>
  )
}

export default FleetCardStatus
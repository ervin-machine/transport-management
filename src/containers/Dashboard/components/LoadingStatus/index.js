import React from 'react'
import LoadingCardStatus from '../../../PublicComponents/LoadingCardStatus'
import LoadingStatusChart from '../../../PublicComponents/LoadingStatusChart'
import weightIcon from "../../../../assets/images/weight-icon.svg"

function LoadingStatus() {
  return (
    <div className='loading-status-content'>
        <LoadingCardStatus>
            <LoadingStatusChart />
            <div className='loading-time-content'>
              <p>25 min.</p>
              <p>Avg Loading Time</p>
            </div>
            <img src={weightIcon} alt="" />
            <div className='loading-weight-content'>
              <p>10 tons</p>
              <p>Avg Loading Weight</p>
            </div>
        </LoadingCardStatus>
    </div>
  )
}

export default LoadingStatus
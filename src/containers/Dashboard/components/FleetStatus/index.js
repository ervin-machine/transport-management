import React from 'react'
import FleetCardStatus from '../../../PublicComponents/FleetCardStatus'
import FleetStatusChart from '../../../PublicComponents/FleetStatusChart'

function FleetStatus() {
  return (
    <div>
        <FleetCardStatus>
            <FleetStatusChart />
            <div>
              <p>95%</p>
              <p>Fleet Efficieny</p>
            </div>
            <div className='fleet-information'>
              <div>
                <p>Total Fleet</p>
                <p>On the Move</p>
                <p>In Maintenance</p>
              </div>
              <div>
                <p>63</p>
                <p>60</p>
                <p>3</p>
              </div>
            </div>
        </FleetCardStatus>
    </div>
  )
}

export default FleetStatus
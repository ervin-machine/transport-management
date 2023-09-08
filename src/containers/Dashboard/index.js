import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import ProfitStatus from './components/ProfitStatus'
import FleetStatus from './components/FleetStatus'
import LoadingStatus from './components/LoadingStatus'
import DeliveryStatus from './components/DelieryStatus'
import ProfitCountry from './components/ProfitCountry'
import AvgDevliveryRoute from './components/AvgDevliveryRoute'
import AvgTimeDelivery from './components/AvgTimeDelivery'
import "./Dashboard.css"

import { selectKusurData } from "./store/selectors"
import { fetchData } from "./store/actions/index"

const Dashboard = React.memo(function Dashboard(props) {
    const { fetchData, kusurData }  = props

    useEffect(() => {
        fetchData()
    }, [fetchData])
 
    return (
        <div className='dashboard-container'>
            <div className='dashboard-content'>
            <ProfitStatus />
            <div>
                <div style={{ display: "flex" }}>
                    <FleetStatus />
                    <LoadingStatus />
                </div>
                <ProfitCountry />
            </div>
            <DeliveryStatus />
            <AvgDevliveryRoute />
            <AvgTimeDelivery />
            </div>
        </div>
    )
}
)
const mapStateToProps = createStructuredSelector({
    kusurData: selectKusurData(),
})

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(fetchData())
        },
    }
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default (withConnect)(Dashboard)
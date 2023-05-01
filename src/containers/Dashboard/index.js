import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import ProfitStatus from './components/ProfitStatus'
import DeliveryStatus from './components/DeliveryStatus'
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
                <DeliveryStatus />
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
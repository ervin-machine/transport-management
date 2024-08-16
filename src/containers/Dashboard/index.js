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
import { Grid } from "@mui/material";
import { Box } from '@mui/material'

const Dashboard = React.memo(function Dashboard(props) {
    const { fetchData }  = props

    useEffect(() => {
        fetchData()
    }, [fetchData])
 
    return (
        <Box sx={{ width: "85.3%" }}>
            <Grid container spacing={2} justifyContent={"center"} height={"100vh"} overflow={"auto"}>
                <Grid item md={12}>
                    <ProfitStatus />
                </Grid>
                    <Grid item md={5.5}>
                        <FleetStatus />
                    </Grid>
                    <Grid item md={5.5}>
                        <LoadingStatus />
                    </Grid>
                    <Grid item md={11}>
                        <ProfitCountry />
                    </Grid>
                <Grid container spacing={2} justifyContent={"center"} sx={{ marginTop: "5px" }}>
                    <Grid item md={5.5}>
                        <DeliveryStatus />
                    </Grid>
                    <Grid item md={5.75}>
                        <AvgDevliveryRoute />
                    </Grid>
                </Grid>
                <Grid item md={11}>
                    <AvgTimeDelivery />
                </Grid>
            </Grid>
        </Box>
        
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
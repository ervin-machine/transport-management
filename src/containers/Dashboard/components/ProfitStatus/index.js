import React from 'react'
import ProfitStatusCard from '../../../PublicComponents/ProfitStatusCard'
import { Grid } from "@mui/material";

function ProfitStatus() {
  return (
    <Grid container spacing={2} justifyContent={"center"} sx={{ marginTop: "5px" }}>
      <Grid item lg={2.2} md={4.2}>
        <ProfitStatusCard title="Revenue" price="824.2,217" percentage="-4.2" />
      </Grid>
      <Grid item lg={2.2} md={4.2}>
        <ProfitStatusCard title="Costs" price="255,507" percentage="-4.2" />
      </Grid>
      <Grid item lg={2.2} md={4.2}>
        <ProfitStatusCard title="Profit" price="255,507" percentage="-4.2" />
      </Grid>
      <Grid item lg={2.2} md={4.2}>
        <ProfitStatusCard title="Shipments" price="512" percentage="-4.2" />
      </Grid>
      <Grid item lg={2.2} md={4.2}>
        <ProfitStatusCard title="Avg Delivery Time" price="6.8h" percentage="-4.2" />
      </Grid>
    </Grid>
        
  )
}

export default ProfitStatus
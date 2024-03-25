import React from 'react'
import ProfitStatusCard from '../../../PublicComponents/ProfitStatusCard'
import { Grid } from "@mui/material";

function ProfitStatus() {
  return (
    <Grid container spacing={2} justifyContent={"center"} sx={{ marginTop: "5px" }}>
      <Grid item md={2.2}>
        <ProfitStatusCard title="Revenue" price="824,217" percentage="-4" />
      </Grid>
      <Grid item md={2.2}>
        <ProfitStatusCard title="Costs" price="255,507" percentage="-4" />
      </Grid>
      <Grid item md={2.2}>
        <ProfitStatusCard title="Profit" price="255,507" percentage="-4" />
      </Grid>
      <Grid item md={2.2}>
        <ProfitStatusCard title="Shipments" price="512" percentage="-4" />
      </Grid>
      <Grid item md={2.2}>
        <ProfitStatusCard title="Avg Delivery Time" price="6.8h" percentage="-4" />
      </Grid>
    </Grid>
        
  )
}

export default ProfitStatus
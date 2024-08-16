import React from 'react'
import { Grid } from "@mui/material";

function DeliveryCardStatus({ children }) {
  return (
    <Grid item md={5.5}>
      <div className='delivery-card-status'>{ children }</div>
    </Grid>
  )
}

export default DeliveryCardStatus
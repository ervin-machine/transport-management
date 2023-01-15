import React from 'react'
import "./partners.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import bingo from '../../assets/images/bingo-logo.jpeg'
import fis from '../../assets/images/logo-fis-doo.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function index() {
    return (
        <Box sx={{ width: '100%', margin: "20px" }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                Partners
            </Typography>
            <Grid container spacing={2} direction="row"
                alignItems="center"
                justify="center">
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
                        <img className='img-partner' src={bingo} alt="" />
                    </Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
                        <img className='img-partner' src={fis} alt="" />
                    </Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item>xs=2</Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item>xs=2</Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item>xs=2</Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={2} lg={3} md={3}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default index
import React from 'react'
import "./partners.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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

function Partners() {
    return (
        <div className='partner-container'>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                Partners
            </Typography>
            <div className='partner-list'>
                <div className='img-content'>
                    <img className='img-partner' src={bingo} alt="" />
                </div>
                <div className='img-content'>
                    <img className='img-partner' src={fis} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners
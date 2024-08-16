import React from 'react'
import "./partners.css"
import Typography from '@mui/material/Typography';
import bingo from '../../assets/images/bingo-logo.jpeg'
import fis from '../../assets/images/logo-fis-doo.png'

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
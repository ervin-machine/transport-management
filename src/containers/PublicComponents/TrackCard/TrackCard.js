import React from 'react'
import "./TrackCard.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import kamion from "../../../assets/images/kamion-1.png"

function TrackCard(props) {
    const { setIsRouteInfoOpened } = props
    const [activeStep, setActiveStep] = React.useState(0);

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div className='track-card-section' onClick={() => setIsRouteInfoOpened(true)}>
            <div className='track-card-head'>
                <p className='track-card-text'>Kamion 1</p>
                <p className='track-card-text-1'>Waiting</p>
            </div>
            <div className='track-info-background'>
                <div className='track-info-content'>
                    <div className='track-info-left-content'>
                        <p className='track-info-time'>03:20:00</p>
                        <p className='track-info-kilometers'>38km left</p>
                    </div>
                    <div className='track-info-right-content'>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel
                                        optional={
                                            index === 2 ? (
                                                <Typography variant="caption">Last step</Typography>
                                            ) : null
                                        }
                                    >
                                        <Typography style={{ color: "#6D6D6D" }}>{step.label}</Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3 }}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </div>
                </div>
                <div className='track-card-footer'>
                    <img className='truck-image' src={kamion} alt="" />
                </div>
            </div>
        </div>
    )
}

const steps = [
    {
        label: 'destination 1'
    },
    {
        label: 'destination 2'
    },
];


export default TrackCard
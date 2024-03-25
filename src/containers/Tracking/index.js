import React, { useState } from 'react'
import "./Tracking.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TrackCard from '../PublicComponents/TrackCard/TrackCard'
import kamion from "../../assets/images/kamion-1.png"
import GoogleMaps from '../PublicComponents/GoogleMap/GoogleMap'
import TrackModal from '../PublicComponents/TrackModal';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Tracking(props) {
    const { setMap } = props
    const [isRouteInfoOpened, setIsRouteInfoOpened] = useState(false)

    const handleOpenTrackModal = () => {
        setIsRouteInfoOpened(!isRouteInfoOpened)
    }

    return (
        <Box>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white", margin: "20px" }}>
                Route Tracking
            </Typography>
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ backgroundColor: "rgb(24, 24, 24)" }} onClick={handleOpenTrackModal}>
                            <CardActionArea>
                                <CardContent>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography align='left' gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                            Kamion 1
                                        </Typography>
                                        <Typography align='right' variant="body2" color="text.secondary" sx={{ color: "white", marginTop: "5px" }}>
                                            Waiting
                                        </Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Kilometers
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                Time
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Start route
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                End Route
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardMedia
                                    style={{ margin: "20px" }}
                                    component="img"
                                    height="140"
                                    image={kamion}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={3} lg={4} md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ maxWidth: 445, backgroundColor: "rgb(24, 24, 24)" }}>
                            <CardActionArea>
                                <CardContent>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography align='left' gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                            Kamion 1
                                        </Typography>
                                        <Typography align='right' variant="body2" color="text.secondary" sx={{ color: "white", marginTop: "5px" }}>
                                            Waiting
                                        </Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Kilometers
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                Time
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Start route
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                End Route
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardMedia
                                    style={{ margin: "20px" }}
                                    component="img"
                                    height="140"
                                    image={kamion}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={3} lg={6} md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ maxWidth: 445, backgroundColor: "rgb(24, 24, 24)" }} onClick={handleOpenTrackModal}>
                            <CardActionArea>
                                <CardContent>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography align='left' gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                            Kamion 1
                                        </Typography>
                                        <Typography align='right' variant="body2" color="text.secondary" sx={{ color: "white", marginTop: "5px" }}>
                                            Waiting
                                        </Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Kilometers
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                Time
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Start route
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                End Route
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardMedia
                                    style={{ margin: "20px" }}
                                    component="img"
                                    height="140"
                                    image={kamion}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={3} lg={4} md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ maxWidth: 445, backgroundColor: "rgb(24, 24, 24)" }}>
                            <CardActionArea>
                                <CardContent>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography align='left' gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                            Kamion 1
                                        </Typography>
                                        <Typography align='right' variant="body2" color="text.secondary" sx={{ color: "white", marginTop: "5px" }}>
                                            Waiting
                                        </Typography>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Kilometers
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                Time
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography align='left' gutterBottom variant="p" component="div" sx={{ color: "white" }}>
                                                Start route
                                            </Typography>
                                            <Typography align='right' variant="p" color="text.secondary" sx={{ color: "white" }}>
                                                End Route
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardMedia
                                    style={{ margin: "20px" }}
                                    component="img"
                                    height="140"
                                    image={kamion}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
            <TrackModal handleOpenTrackModal={handleOpenTrackModal} isRouteInfoOpened={isRouteInfoOpened} />
        </Box>
    )
}

export default Tracking
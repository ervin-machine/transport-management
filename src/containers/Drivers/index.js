import React, { useState } from 'react'
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
import user from "../../assets/images/user.png"
import GoogleMaps from '../PublicComponents/GoogleMap/GoogleMap'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Drivers(props) {
    const { setMap } = props
    const [isRouteInfoOpened, setIsRouteInfoOpened] = useState(false)

    return (
        <Box sx={{ width: '80%' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white", margin: "20px" }}>
                Drivers
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={6} xs={10} xl={3} lg={4} md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ maxWidth: 445, backgroundColor: "rgb(24, 24, 24)" }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ margin: "20px" }}
                                    component="img"
                                    height="140"
                                    image={user}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography align='left' gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                        Ime Prezime
                                    </Typography>
                                    <Typography align='left' variant="body2" color="text.secondary" sx={{ color: "white", marginTop: "5px" }}>
                                        Grad
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
                <Grid item sm={6} xs={10} xl={3} lg={4} md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ maxWidth: 445, backgroundColor: "rgb(24, 24, 24)" }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ margin: "20px" }}
                                    component="img"
                                    height="140"
                                    image={user}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography align='left' gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                        Ime Prezime
                                    </Typography>
                                    <Typography align='left' variant="body2" color="text.secondary" sx={{ color: "white", marginTop: "5px" }}>
                                        Grad
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Drivers
import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import user from "../../assets/images/user.png"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Drivers(props) {

    return (
        <Box sx={{ width: "85.3%" }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white", margin: "20px" }}>
                Drivers
            </Typography>
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
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
                <Grid item md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
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
                <Grid item md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
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
                <Grid item md={3}>
                    <Item sx={{ backgroundColor: "black" }}>
                        <Card sx={{ backgroundColor: "rgb(24, 24, 24)" }}>
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
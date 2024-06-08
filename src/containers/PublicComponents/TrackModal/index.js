import * as React from 'react';
import {
    useJsApiLoader,
    GoogleMap,
} from '@react-google-maps/api'
import { useState } from 'react'
import mapStyles from '../GoogleMap/mapStyles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import kamion from "../../../assets/images/kamion-1.png"
import "./TrackModal.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 1000,
    bgcolor: 'rgb(24, 24, 24)',
    border: 'none',
    boxShadow: 24,
    p: 4,
    width: "100%",
    height: "85%"
};

const center = { lat: 48.8584, lng: 2.2945 }


function TrackModal(props) {
    const {handleOpenTrackModal, isRouteInfoOpened} = props
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDWKo7p9suXytIA19vdrw7pagFh0njxM-k",
        libraries: ['places'],
    })
    // eslint-disable-next-line
    const [map, setMap] = useState(/** @type google.maps.Map */(null))

    return (
        <Modal
            open={isRouteInfoOpened}
            onClose={handleOpenTrackModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <CloseIcon onClick={handleOpenTrackModal} sx={{ cursor: "pointer", color: "white" }} />
            <CardMedia
                style={{ margin: "20px", width: "500px" }}
                component="img"
                height="240"
                image={kamion}
                alt="green iguana"
            />
                <div className="track-modal-map-content">
                    <Typography id="modal-modal-title" className="track-modal-text" variant="h6" component="h2">
                        Route
                    </Typography>
                    <div className='track-modal-map-content-2'>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="track-modal-text-2 left-text">
                            01:23:56
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="track-modal-text-2">
                            38 km left
                        </Typography>
                    </div>
                </div>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '50%', zIndex: -1, position: "relative" }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    styles: mapStyles.dark
                }}
                onLoad={map => setMap(map)}
            />
            </Box>
        </Modal>
    )
}

export default TrackModal
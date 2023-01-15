import {
    useJsApiLoader,
    GoogleMap,
} from '@react-google-maps/api'
import { useState } from 'react'
import mapStyles from "./mapStyles";

const center = { lat: 48.8584, lng: 2.2945 }

function GoogleMaps() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDWKo7p9suXytIA19vdrw7pagFh0njxM-k",
        libraries: ['places'],
    })

    // eslint-disable-next-line
    const [map, setMap] = useState(/** @type google.maps.Map */(null))

    if (!isLoaded) {
        return <p></p>
    }

    return (
        <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '700px', height: '400px', marginLeft: "35px", marginTop: "-20px" }}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                styles: mapStyles.dark
            }}
            onLoad={map => setMap(map)}
        >
        </GoogleMap>

    )
}

export default GoogleMaps
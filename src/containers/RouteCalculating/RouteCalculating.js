import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
import "./RouteCalculating.css"
import mapStyles from '../PublicComponents/GoogleMap/mapStyles'

const center = { lat: 48.8584, lng: 2.2945 }

function RouteCalculating() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDWKo7p9suXytIA19vdrw7pagFh0njxM-k",
        libraries: ['places'],
    })
    // eslint-disable-next-line
    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <p></p>
    }

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }


    return (
        <div>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '84.9%', height: '92.6%', position: "absolute" }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    styles: mapStyles.dark
                }}
                onLoad={map => setMap(map)}
            >
                <Marker position={center} />
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>
            <div className='route-calculating'>
                <Autocomplete>
                    <input
                        className='route-input'
                        type='text'
                        placeholder='Origin'
                        ref={originRef} />
                </Autocomplete>
                <Autocomplete>
                    <input
                        className='route-input'
                        type='text'
                        placeholder='Destination'
                        ref={destiantionRef}
                    />
                </Autocomplete>
                <button
                    className='calculate-button'
                    type='submit'
                    onClick={calculateRoute}>
                    Calculate Route
                </button>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <p style={{ margin: "20px 30px 20px 0px", color: "white" }}>Distance: {distance} </p>
                    <p style={{ margin: "20px 30px 20px 0px", color: "white" }}>Duration: {duration} </p>
                </div>
            </div>
        </div>
    )
}

export default RouteCalculating
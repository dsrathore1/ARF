import React from "react";
import GoogleMaps from "google-map-react";
import LocationMaker from "./LocationMaker";


const DisasterIndicatorMap = ({ center, zoom }) => {
    return (
        <>
            <GoogleMaps
                bootstrapURLKeys={{ key: "AIzaSyBJdvp7ZwTmmEXzGBnY8VRd06wVVSE31og" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMaker lat={center.lat} lng={center.lng} />
            </GoogleMaps>
        </>
    );
}

DisasterIndicatorMap.defaultProps = {
    center: {
        lat: 20.5937,
        lng: 78.9629
    },
    zoom: 5
}

export default DisasterIndicatorMap;
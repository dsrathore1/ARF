import React from 'react';
import "../Styles/MapStyle.css";
import { AiTwotoneFire } from "react-icons/ai";
import { MdLandslide, MdFlood } from "react-icons/md";
import { GiEdgeCrack } from "react-icons/gi";
import { RiEarthquakeFill } from "react-icons/ri";

const LocationMaker = ({ lat, lng, onClick }) => {
    return (
        <>
            <div className='location-marker' onClick={onClick}>
                    <AiTwotoneFire className='location-icon' style={{ color: "#FFB81C" }} />
                    <MdLandslide className='location-icon' style={{ color: "#009A17" }} />
                    <MdFlood className='location-icon' style={{ color: "#00AEEF" }} />
                    <GiEdgeCrack className='location-icon' style={{ color: "#9B945F" }} />
                    <RiEarthquakeFill className='location-icon' style={{ color: "#CBA135" }} />
            </div>
        </>
    )
}

export default LocationMaker
import React from 'react'
import "../Styles/LocationStyle.css";
import Nav from '../Components/Nav';
import DMap from '../Components/DisasterIndicatorMap';
import { AiTwotoneFire } from "react-icons/ai";
import { MdLandslide, MdFlood } from "react-icons/md";
import { GiEdgeCrack } from "react-icons/gi";
import { RiEarthquakeFill } from "react-icons/ri";

import "../Styles/MapStyle.css";

const Location = () => {
    React.useEffect(() => {
        document.title = "Disaster Location";
    });

    return (
        <>
            <div className='mainLocation'>
                <Nav />
                <div className='mapMainContainer'>
                    <div className='mapTop'>
                        <div className='location-addBtn'>
                            <input className='location-input' placeholder='Send Location' value={"Jodhpur, Rajasthan (India)"} />
                        </div>
                        <div className='location-icons'>
                            <p className='location-label'>fire</p>
                            <AiTwotoneFire className='location-icon' style={{ color: "#FFB81C" }} />
                            <p className='location-label'>landslide</p>
                            <MdLandslide className='location-icon' style={{ color: "#009A17" }} />
                            <p className='location-label'>flood</p>
                            <MdFlood className='location-icon' style={{ color: "#00AEEF" }} />
                            <p className='location-label'>drought</p>
                            <GiEdgeCrack className='location-icon' style={{ color: "#9B945F" }} />
                            <p className='location-label'>earthquake</p>
                            <RiEarthquakeFill className='location-icon' style={{ color: "#CBA135" }} />
                        </div>
                    </div>
                    <DMap />
                </div>
            </div>
        </>
    )
}

export default Location
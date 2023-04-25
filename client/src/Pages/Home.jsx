import React from 'react';
import "../../src/Styles/HomeStyle.css";
import PhoneImg from "../Assets/PhoneLogo.png";
import LocationImg from "../Assets/location-Icon.png";
import ProfilePic from "../Assets/ProfilePic.jpg";
import Alert from "../Assets/Alert.png";

const Home = () => {
    return (
        <div className='homeMainContainer'>
            <div className='headingRow'>
                <div className='locationsContainer'>
                    <img className='locationImg' src={LocationImg} alt="@" />
                    <div className='locationPara'>
                        <p className='add'>5200 Eubank Blvd. City...</p>
                        <p className='dis'>Disaster Location</p>
                    </div>
                </div>
                <div className='center'>
                <img className='alertIcon' src={Alert} alt="alert"/>
                <h1 className='homeTitle'>Emergency help<br /> needed!</h1>
                </div>
                <div className='profileContainer'>
                    <img className='profileImg' src={ProfilePic} alt="#" />
                    <div className='profilePara'>
                        <p className='name'>Gurbirpal Singh</p>
                        <p className='dis'>DGNCC</p>
                    </div>
                </div>
            </div>
            <p className='homeClick'>Just click the button below</p>
            <button className='emergencyBtn'>
                <img className='btnImg' src={PhoneImg} alt="#" />
            </button>
        </div>
    )
}

export default Home
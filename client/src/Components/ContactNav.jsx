import React from 'react'
import Profile from "../Assets/ProfilePic.jpg";
import Logo from "../Assets/Logo.png";
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../utils/SearchBar';

const ContactNav = ({ show }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='contactNav'>
                <div className='contactNavLeft'>
                    <img className='logoImg' src={Logo} alt="" />
                    <SearchBar showBar={show} />
                </div>
                <div className='contactNavRight'>
                    <div className='addPersonsDiv' onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
                        <BsFillPersonVcardFill style={{ color: "#fff", fontSize: "1.8rem" }} />
                        <div className='notiIcon'><span className='notiNumber'>2</span></div>
                    </div>
                    <div className='adminProfile' onClick={() => alert("Gurbirpal Singh")}>
                        <img className='adminProfilePic' src={Profile} alt='#profilePic' />
                        <div className='adminProfileDetails'>
                            <p className='adminName'>Gurbirpal Singh</p>
                            <p className='adminEmail'>gurbirpalsingh23@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactNav
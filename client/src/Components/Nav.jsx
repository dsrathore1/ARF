import React from 'react';
import '../Styles/NavStyle.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Nav = () => {

    const location = useLocation();

    if (location.pathname === "/contacts") {
        return null;
    }
    if (location.pathname === "/login") {
        return null;
    }
    if (location.pathname === "/landingPage") {
        return null;
    }
    if (location.pathname === "/signUp") {
        return null;
    }

    return (
        <>
            <div className='navContainer' id='nav'>
                <span className='logo'> A<br /><span className='s'>RF</span></span>
                <div className='navLinks'>
                    <ol className='lists'>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/"} className='list Home'>Home</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/contacts"} className='list Con'>Contacts</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/about"} className='list About'>About Us</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/location"} className='list Loc'>Location</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/settings"} className='list Set'>Settings</NavLink>
                    </ol>
                    <Link to={'/login'}>
                        <p href='#contactMe' className='loginBtn btn'>Logout</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Nav
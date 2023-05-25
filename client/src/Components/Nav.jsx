import React from 'react';
import '../Styles/NavStyle.css';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='navContainer' id='nav'>
                <span className='logo'> A<br /><span className='s'>RF</span></span>
                <div className='navLinks'>
                    <ol className='lists'>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/"} className='list About'>Home</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/location"} className='list Loc'>Location</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/contacts"} className='list Con'>Members</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#fff" : "#ffffffb4" })} to={"/setting"} className='list Set'>Settings</NavLink>
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
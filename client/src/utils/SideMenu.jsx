import React from 'react';
import { NavLink } from "react-router-dom";
import "../Styles/SideMenuStyle.css";

import { BiHomeCircle, BiPaperPlane, BiLocationPlus } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";

const SideMenu = () => {
    return (
        <>
            <div className='sideMenuMainContainer'>
                <div className='sideMenuNavigation'>
                    <ol className='sideMenuAllList'>
                        <NavLink to={"/"} style={({ isActive }) => ({ borderLeft: isActive ? "4px solid #fff" : "none", background:isActive?"#ffffff1d":"none" })} className='sideMenuList home'> <BiHomeCircle style={{ marginRight: "1rem" }} /> Home</NavLink>
                        <NavLink to={"/about"} style={({ isActive }) => ({ borderLeft: isActive ? "4px solid #fff" : "none", background:isActive?"#ffffff1d":"none" })} className='sideMenuList about'><BiPaperPlane style={{ marginRight: "1rem" }} />About Us</NavLink>
                        <NavLink to={"/location"} className='sideMenuList location' style={({ isActive }) => ({ borderLeft: isActive ? "4px solid #fff" : "none", background:isActive?"#ffffff1d":"none" })}><BiLocationPlus style={{ marginRight: "1rem" }} />Location</NavLink>
                        <NavLink to={"/contacts"} style={({ isActive }) => ({ borderLeft: isActive ? "4px solid #fff" : "none", background:isActive?"#ffffff1d":"none" })} className='sideMenuList sideMenuContact'><RiContactsLine style={{ marginRight: "1rem" }} />Members</NavLink>
                        <NavLink to={"/setting"} style={({ isActive }) => ({ borderLeft: isActive ? "4px solid #fff" : "none", background:isActive?"#ffffff1d":"none" })} className='sideMenuList setting'><GoSettings style={{ marginRight: "1rem" }} />Settings</NavLink>
                    </ol>
                </div>
                <NavLink to={"/login"}>  <span className='sideMenuLogOutBtn'><HiOutlineLogout style={{ marginRight: ".5rem", fontSize: "1.8rem" }} /></span></NavLink>
            </div>
        </>
    )
}

export default SideMenu
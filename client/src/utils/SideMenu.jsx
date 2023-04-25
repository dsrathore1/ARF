import React from 'react';
import { Link } from "react-router-dom";
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
                        <Link to={"/"}><li className='sideMenuList home'> <BiHomeCircle style={{ marginRight: "1rem" }} /> Home</li></Link>
                        <Link to={"/contacts"}><li className='sideMenuList sideMenuContact'><RiContactsLine style={{ marginRight: "1rem" }} /> Contacts</li></Link>
                        <Link to={"/about"}><li className='sideMenuList about'><BiPaperPlane style={{ marginRight: "1rem" }} />About Us</li></Link>
                        <Link to={"/location"}><li className='sideMenuList location'><BiLocationPlus style={{ marginRight: "1rem" }} />Location</li></Link>
                        <Link to={"/settings"}><li className='sideMenuList setting'><GoSettings style={{ marginRight: "1rem" }} />Settings</li></Link>
                    </ol>
                </div>
                <Link to={"/"}>  <span className='sideMenuLogOutBtn'><HiOutlineLogout style={{ marginRight: ".5rem", fontSize:"1.8rem"}} /></span></Link>
            </div>
        </>
    )
}

export default SideMenu
import React, { useEffect } from 'react';
import "../Styles/ContactStyle.css";
import SideMenu from '../utils/SideMenu';
import ContactNav from '../Components/ContactNav';
import Dashboard from '../Components/Dashboard';

const Contact = () => {
    useEffect(() => {
        document.title = "Members";
    });

    return (
        <>
            <ContactNav show={true}/>
            <div className='contactContainer'>
                <div className='contactPageLeftSide'>
                    <SideMenu />
                </div>
                <div className='contactPageRightSide'>
                    <div className='rightSideHandler'>
                        <div className='memberBtnContainer'>
                            <button className='volunteersFindBtn memberBtn'>Volunteers</button>
                            <button className='adminFindBtn memberBtn'>Admin</button>
                            <button className='driverBtn memberBtn'>Driver</button>
                        </div>
                        <div className='membersList'>
                            <p>Total Members : <span className='totalMembersData'>1000</span></p>
                        </div>
                    </div>
                    <Dashboard />
                </div>
            </div>
        </>
    )
}

export default Contact
import React from 'react';
import "../Styles/SettingStyle.css";
import Nav from "../Components/ContactNav.jsx";
import SideMenu from '../utils/SideMenu';

const Settings = () => {
    return (
        <>
            <Nav show={false} />
            <div className='settingMainContainer'>
                <div className='settingLeftSide'>
                    <SideMenu />
                </div>
                <div className='settingRightSide'>
                    <h1 className='settingHeading'>Setting</h1>
                    <form method='GET' action='/setting' className='settingWorkingSpace'>
                        <div className='editArea'>
                            <h1 className='ProfileTitle'>Profile<div className='profileFullStop'></div></h1>
                            <div className='settingInputDiv settingTop'>
                                <div className='settingName'>
                                    <label className='settingLabel'>Full Name</label>
                                    <input className='settingInputs' name='name' placeholder="Gurbirpal Singh" type='text' />
                                </div>
                                <div className='settingName'>
                                    <label className='settingLabel'>Role</label>
                                    <input className='settingInputs' placeholder="Admin" type='text' disabled />
                                </div>
                            </div>
                            <div className='mainPwdDiv settingInputDiv'>
                                <div className='pwdAndCP'>
                                    <label className='settingLabel'>Password</label>
                                    <input className='settingInputs' name='username' placeholder='************' type='password' />
                                </div>
                                <div className='pwdAndCP'>
                                    <label className='settingLabel'>Confirm Password</label>
                                    <input className='settingInputs' name='username' placeholder='************' type='password' />
                                </div>
                            </div>
                            <div className='settingInputDiv mainEmailMobDiv'>
                                <div className='emailAndMob'>
                                    <label className='settingLabel'>Email</label>
                                    <input className='settingInputs' placeholder="gurbirpalsingh@gmail.com" />
                                </div>
                                <div className='emailAndMob'>
                                    <label className='settingLabel'>Mobile Number</label>
                                    <input className='settingInputs' placeholder="9923567916" />
                                </div>
                            </div>
                        </div>
                        <div className='settingBtnContainer'>
                            <button className='settingUpdateBtn' type='submit'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Settings
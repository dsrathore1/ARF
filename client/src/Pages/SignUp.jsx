import React from 'react'
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import Logo from "../Assets/Logo.png";
import "../Styles/LoginSignUpStyle.scss";

const SignUp = () => {
    return (
        <>
            <div className='loginMainContainer'>
                <div className='loginNav'>
                    <img className='loginLogo ' src={Logo} alt='#logo' />
                    <h2 className='loginLogoName'>ARForce</h2>
                    <Link className='loginNavLinks loginHome' to={"/"}>Home</Link>
                    <Link className='loginNavLinks loginJoin' to={"/login"}>Login</Link>
                </div>
                <div className='loginContentContainer'>
                    <h1 className='loginNow signUpLogo'>CREATE NEW ACCOUNT<div className='fullStop'></div></h1>
                    <p className='signUpQ'>Already have an account? <Link className='signUpBtn' to={"/login"}>Log In</Link></p>
                    <form className='formData'>
                        <div className='commonDiv' >
                            <div className='uNameDiv'>
                                <div className='fName'>
                                    <label className='loginLabels usernameLabel'>First Name</label>
                                    <div className='inputContainer fNameIp'>
                                        <input className='loginInputs usernameIp' placeholder='@exampleXYZ123' />
                                        <BiUser style={{ fontSize: "1.5rem" }} />
                                    </div>
                                </div>
                                <div className='lName'>
                                    <label className='loginLabels usernameLabel'>Last Name</label>
                                    <div className='inputContainer lNameIp'>
                                        <input className='loginInputs usernameIp' placeholder='@exampleXYZ123' />
                                        <BiUser style={{ fontSize: "1.5rem" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='commonDiv emailDiv'>
                            <label className='loginLabels emailLabel'>Role</label>
                            <div className='inputContainer'>
                                <select className='loginInputs selectIp' >
                                    <option>Volunteer</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className='commonDiv emailDiv'>
                            <label className='loginLabels emailLabel'>Email</label>
                            <div className='inputContainer'>
                                <input className='loginInputs emailIp' placeholder='examplezyx@gmail.com' />
                                <HiOutlineMail style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <div className='commonDiv pwdDiv'>
                            <label className='loginLabels pwdLabel'>Password</label>
                            <div className='inputContainer'>
                                <input className='loginInputs pwdIp' placeholder='*****' />
                                <AiOutlineEye style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <button type='submit' className='loginNowBtn'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
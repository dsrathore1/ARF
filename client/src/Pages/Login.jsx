import React from 'react';
import "../Styles/LoginSignUpStyle.css";
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import Logo from "../Assets/Logo.png";

const Login = () => {
    return (
        <>
            <div className='loginMainContainer'>
                <div className='loginNav'>
                    <img className='loginLogo' src={Logo} alt='#logo' />
                    <h2 className='loginLogoName'>ARForce</h2>
                    <Link className='loginNavLinks loginHome' to={"/sd"}>Home</Link>
                    <Link className='loginNavLinks loginJoin' to={"/signUp"}>Join</Link>
                </div>
                <div className='loginContentContainer'>
                    <h1 className='loginNow'>Login Now<span className='fullStop'>.</span></h1>
                    <p className='signUpQ'>Don't have an account? <Link className='signUpBtn' to={"/signUp"}>Sign Up</Link></p>
                    <form className='formData'>
                        <div className='commonDiv uNameDiv' >
                            <label className='loginLabels usernameLabel'>Username</label>
                            <div className='inputContainer'>
                                <input className='loginInputs usernameIp' placeholder='@exampleXYZ123' />
                                <BiUser style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <div className='commonDiv emailDiv'>
                            <label className='loginLabels emailLabel'>Email</label>
                            <div className='inputContainer'>
                                <input className='loginInputs emailIp' placeholder='examplezyx@gmail.com' />
                                <HiOutlineMail className='loginMailIcon' style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <div className='commonDiv pwdDiv'>
                            <label className='loginLabels pwdLabel'>Password</label>
                            <div className='inputContainer'>
                                <input className='loginInputs pwdIp' placeholder='*****' />
                                <AiOutlineEye style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <button type='submit' className='loginNowBtn'>Login Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
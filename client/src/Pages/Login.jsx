import React from 'react';
import "../Styles/LoginSignUpStyle.css";
import Logo from "../Assets/Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState({
        email: "",
        pwd: ""
    })

    const loginForm = async (e) => {
        e.preventDefault();
        const verifyUser = signInWithEmailAndPassword(auth, value.email, value.pwd);
        try {
            console.log(verifyUser);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        document.title = "Login";
    })

    const [isActiveUser, setIsActiveUser] = React.useState(false);
    const [isActiveEmail, setIsActiveEmail] = React.useState(false);
    const [isActivePwd, setIsActivePwd] = React.useState(false);

    const handleUser = () => {
        setIsActiveUser(!isActiveUser);
    }

    const handleEmail = () => {
        setIsActiveEmail(isActiveEmail);
    }

    const handlePwd = () => {
        setIsActivePwd(!isActivePwd);
    }

    return (
        <>
            <div className='loginMainContainer'>
                <div className='loginNav'>
                    <img className='loginLogo' src={Logo} alt='#logo' />
                    <h2 className='loginLogoName'>ARForce</h2>
                    <Link className='loginNavLinks loginHome' to={"/"}>Home</Link>
                    <Link className='loginNavLinks loginJoin' to={"/signUp"}>Join</Link>
                </div>
                <div className='loginContentContainer'>
                    <h1 className='loginNow'>Login Now<div className='fullStop'></div></h1>
                    <p className='signUpQ'>Don't have an account? <Link className='signUpBtn' to={"/signUp"}>Sign Up</Link></p>
                    <form className='formData' onSubmit={loginForm}>
                        <div className='commonDiv uNameDiv'>
                            <label className='loginLabels usernameLabel'>Username</label>
                            <div className='inputContainer' onClick={handleUser} style={{
                                borderWidth: isActiveUser ? "2px" : "0",
                                borderColor: isActiveUser ? "#9370d8" : "none",
                                borderStyle: isActiveUser ? "solid" : "none",
                            }}>
                                <input className='loginInputs usernameIp' placeholder='Username' name='username' type='text' />
                                <BiUser style={{ color: isActiveUser ? "#9370d8" : "#fff", fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <div className='commonDiv emailDiv'>
                            <label className='loginLabels emailLabel'>Email</label>
                            <div className='inputContainer' style={{
                                borderWidth: isActiveEmail ? "2px" : "0",
                                borderColor: isActiveEmail ? "#9370d8" : "none",
                                borderStyle: isActiveEmail ? "solid" : "none",
                            }} onClick={handleEmail}>
                                <input className='loginInputs emailIp' placeholder='examplezyx@gmail.com' name='email' type='email' value={value.email} onChange={(e) => { setValue((prev) => ({ ...prev, email: e.target.value })) }} />
                                <HiOutlineMail style={{ color: isActiveEmail ? "#9370d8" : "#fff", fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <div className='commonDiv pwdDiv'>
                            <label className='loginLabels pwdLabel'>Password</label>
                            <div className='inputContainer' onClick={handlePwd} style={{
                                borderWidth: isActivePwd ? "2px" : "0",
                                borderColor: isActivePwd ? "#9370d8" : "none",
                                borderStyle: isActivePwd ? "solid" : "none",
                            }}>
                                <input className='loginInputs pwdIp' placeholder='*****' name='pwd' type='password' value={value.pwd} onChange={(e) => { setValue((prev) => ({ ...prev, pwd: e.target.value })) }} />
                                <AiOutlineEye style={{ color: isActivePwd ? "#9370d8" : "#fff", fontSize: "1.5rem" }} />
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
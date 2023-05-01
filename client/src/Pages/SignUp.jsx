import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BiPhone, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import Logo from "../Assets/Logo.png";
import "../Styles/LoginSignUpStyle.css";
import { auth } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        username: "",
        email: "",
        pwd: ""
    });

    const signUpForm = async (e) => {
        e.preventDefault();
        const create = createUserWithEmailAndPassword(auth, values.email, values.pwd);

        try {
            console.log(create);
            const user = (await create).user;

            updateProfile(user, {
                displayName: values.username
            });
            console.log(user);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = "Sign Up";
    }, [])


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
                    <form className='formData' onSubmit={signUpForm}>
                        <div className='commonDiv' >
                            <div className='uNameDiv'>
                                <div className='fName'>
                                    <label className='loginLabels usernameLabel'>Full Name</label>
                                    <div className='inputContainer fNameIp'>
                                        <input className='loginInputs usernameIp' placeholder='Shyam Zala' value={values.username} name='fname' onChange={(e) => { setValues((prev) => ({ ...prev, username: e.target.value })) }} />
                                        <BiUser style={{ fontSize: "1.5rem" }} />
                                    </div>
                                </div>
                                <div className='lName'>
                                    <label className='loginLabels usernameLabel'>Phone Number</label>
                                    <div className='inputContainer lNameIp'>
                                        <input className='loginInputs usernameIp' placeholder='9623142358' />
                                        <BiPhone style={{ fontSize: "1.5rem" }} />
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
                                <input className='loginInputs emailIp' placeholder='examplezyx@gmail.com' name='email' value={setValues.email} onChange={(e) => { setValues((prev) => ({ ...prev, email: e.target.value })) }} />
                                <HiOutlineMail style={{ fontSize: "1.5rem" }} />
                            </div>
                        </div>
                        <div className='commonDiv pwdDiv'>
                            <label className='loginLabels pwdLabel'>Password</label>
                            <div className='inputContainer'>
                                <input className='loginInputs pwdIp' placeholder='*****' type='password' name="pwd" value={setValues.pwd} onChange={(e) => { setValues((prev) => ({ ...prev, pwd: e.target.value })) }} />
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
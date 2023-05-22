import React from 'react';
import style from "../Styles/CartStyle.module.css";
import Logo from "../Assets/Logo.png";
import { FiPhoneCall } from "react-icons/fi";
import CartTile from '../utils/CartTile';
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineMessage } from "react-icons/md";

const Cart = () => {

    React.useEffect(() => {
        document.title = "Selected Volunteers";
    });

    const navigate = useNavigate();
    
    return (
        <>
            <div className={style.cartMainContainer}>
                <div className={style.cartLeftContainer}>
                    <img className={style.cartLogo} src={Logo} alt='#logo' />
                    <p className={style.cartLeftTitle}>Selected Volunteers</p>
                    <div className={style.cartTileContainer}>
                        <div className={style.cartTileMainContainer}>
                            <CartTile />
                            <CartTile />
                        </div>
                        <div className={style.cartBottom}>
                            <button className={style.cartBackBtn} onClick={() => navigate(-1)}> <BsArrowLeft className={style.backBtnArrow} /> Back</button>
                            <p className={style.subTotal}>Total :&emsp; <span className={style.subTotalDigit}>61</span> Volunteers</p>
                        </div>
                    </div>
                </div>
                <div className={style.cartRightContainer}>
                    <p className={style.cartRightTitle}>Take Action</p>

                    <div className={style.rightContainerDetailsBox}>
                        <div className={style.locationDiv}>
                            <h3 className={`${style.locationLabel} ${style.label}`}>Location</h3>
                            <textarea className={style.locationInput} value="Bh. Kalika mata temple, near Satya-narayan temple, Khantwara, Banswara (Raj.)" />
                        </div>
                        <div className={style.selectDisaster}>
                            <h3 className={`${style.disasterLabel} ${style.label}`}>Disaster</h3>
                            <select className={style.selectOption}>
                                <option className={style.disasterOption}>Flood</option>
                                <option className={style.disasterOption}>Earthquake</option>
                                <option className={style.disasterOption}>Storm</option>
                                <option className={style.disasterOption}>Drought</option>
                                <option className={style.disasterOption}>Landslides</option>
                                <option className={style.disasterOption}>Cyclone</option>
                                <option className={style.disasterOption}>Thunderstorm</option>
                                <option className={style.disasterOption}>Cyclone</option>
                            </select>
                        </div>
                    </div>

                    <button className={style.cartMsgBtn}>Message Now <MdOutlineMessage className={style.cartMsgIcon} /></button>
                    <button className={style.cartCallBtn}>Call Now <FiPhoneCall className={style.cartCallIcon} /></button>
                </div>
            </div>
        </>
    )
}

export default Cart
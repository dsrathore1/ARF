import React from 'react';
import style from "../Styles/CartStyle.module.css";
import ProfilePic from "../Assets/ProfilePic.jpg";

const CartTile = () => {
    return (
        <>
            <div className={style.cartTile}>
                <img className={style.cartTileProfile} src={ProfilePic} alt='#profilePic' />
                <div className={style.nameAndId}>
                    <h2 className={style.nameOfVolunteer}>Digpal Singh Rathore</h2>
                    <p className={style.idOfVolunteer}>id-39948838849</p>
                </div>
                <p className={style.cartDesignation}>Major</p>
                <p className={style.volunteerMobNum}>6541225**2</p>
                <button className={style.deleteTile}>X</button>
            </div>

        </>
    )
}

export default CartTile
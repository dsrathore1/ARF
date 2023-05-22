import React from 'react';
import style from "../Styles/ModalStyle.module.css";
import Profile from "../Assets/ProfilePic.jpg";

const Modal = ({ name, email, address, id, desig, rank }) => {
    return (
        <>
            <div className={style.modal} id='modalId'>
                <div className={style.modalBackground}>
                    <button className={style.modalCloseBtn} onClick={() => document.getElementById('modalId').style.display = "none"}>X</button>
                    <div className={style.modalMainContainer}>
                        <div className={style.headingDetails}>
                            <img className={style.profilePic} src={Profile} alt='#profileImg' />
                            <div className={style.aboutDetails}>
                                <h1 className={style.headingText}>{name} </h1>
                                <p className={style.headingEmail}>{email}</p>
                            </div>
                            <span className={style.modalId}>id-{id}</span>
                        </div>
                        <div className={style.detailsContainer}>
                            <div className={style.roleAndName}>
                                <input className={`${style.modalInput} ${style.modalNameInput}`} value={rank} />
                                <input className={`${style.modalInput} ${style.modalRole}`} value={desig} />
                            </div>
                            <div className={`${style.modalAddressInput} ${style.modalInput}`} >{address}</div>
                            <div className={style.modalListsBox}>
                                <ol className={style.boxOperations}>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ol>
                                <ol className={style.boxCertificate}>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                </ol>
                            </div>
                        </div>
                        <div className={style.modalBtns}>
                            <button className={`${style.modalAddBtn} ${style.modalCommonBtnEditing}`}>Add to Cart</button>
                            <button className={`${style.modalDeleteBtn} ${style.modalCommonBtnEditing}`}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
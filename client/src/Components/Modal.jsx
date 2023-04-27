import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import style from "../Styles/ModalStyle.module.css";

const Modal = () => {
    return (
        <>
            <div className={style.modalContainer}>
                <div className={style.mainModalContainer}>
                    <span className={style.uniqueId}>12</span>
                    <h1 className={style.memberName}>Arjun Jain (<span className={style.memberRole}>Volunteer</span>) </h1>
                    <p className={style.contact}><span className={style.contactEmail}>arjunjain@gmail.com</span>|<span>6354117882</span></p>
                    <h3 className={style.memberRank}>NCC-cadet</h3>
                    <div className={style.memberCertiAndOps}>
                        <div className={style.memberCertiContainer}>
                            <span className={style.certificate}>Certificate</span>
                            <ol className={style.listOfCerti}>
                                <li className={style.certiList}>National Integration Camp (NIC) Certificate</li>
                                <li className={style.certiList}>Vayu Sainik Camp (VSC) Certificate</li>
                                <li className={style.certiList}>Army Attachment Camp Certificate</li>
                                <li className={style.certiList}>NCC Republic Day Camp Certificate</li>
                                <li className={style.certiList}>Youth Leadership and Development Camps Certificate</li>
                            </ol>
                        </div>
                        <div className={style.operations}>
                            <span className={style.ops}>Operation Done !</span>
                            <ol className={style.listOfOps}>
                                <li className={style.opsList}>Social Service Activities</li>
                                <li className={style.opsList}>Republic Day Parade</li>
                                <li className={style.opsList}>Independence Day Parade</li>
                                <li className={style.opsList}>National Integration Camps</li>
                                <li className={style.opsList}>Army Attachment Camps</li>
                            </ol>
                        </div>
                    </div>
                    <div className={style.modalActionBtns}>
                        <button className={`${style.modalSubData} ${style.addActionBtn}`}><IoMdAddCircleOutline style={{ color: "#fff", fontSize: "2rem", marginRight: "1rem" }} /> Add</button>
                        <button className={`${style.modalSubData} ${style.editActionBtn}`}><AiFillEdit style={{ color: "#fff", fontSize: "2rem", marginRight: "1rem" }} />Edit</button>
                        <button className={`${style.modalSubData} ${style.deleteActionBtn}`}><AiFillDelete style={{ color: "#fff", fontSize: "2rem", marginRight: "1rem" }} /> Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
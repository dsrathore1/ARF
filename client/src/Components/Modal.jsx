import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import "../Styles/ModalStyle.css";

const Modal = () => {
    return (
        <>
            <div className='modalContainer'>
                <div className='mainModalContainer'>
                    <span className='uniqueId'>12</span>
                    <h1 className='memberName'>Arjun Jain (<span className='memberRole'>Volunteer</span>) </h1>
                    <p className='contact'><span className='contactEmail'>arjunjain@gmail.com</span>|<span>6354117882</span></p>
                    <h3 className='memberRank'>NCC-cadet</h3>
                    <div className='memberCertiAndOps'>
                        <div className='memberCertiContainer'>
                            <span className='certificate'>Certificate</span>
                            <ol className='listOfCerti'>
                                <li className='certiList'>National Integration Camp (NIC) Certificate</li>
                                <li className='certiList'>Vayu Sainik Camp (VSC) Certificate</li>
                                <li className='certiList'>Army Attachment Camp Certificate</li>
                                <li className='certiList'>NCC Republic Day Camp Certificate</li>
                                <li className='certiList'>Youth Leadership and Development Camps Certificate</li>
                            </ol>
                        </div>
                        <div className='operations'>
                            <span className='ops'>Operation Done !</span>
                            <ol className='listOfOps'>
                                <li className='opsList'>Social Service Activities</li>
                                <li className='opsList'>Republic Day Parade</li>
                                <li className='opsList'>Independence Day Parade</li>
                                <li className='opsList'>National Integration Camps</li>
                                <li className='opsList'>Army Attachment Camps</li>
                            </ol>
                        </div>
                    </div>
                    <div className='modalActionBtns'>
                        <button className='modalSubData addActionBtn'><IoMdAddCircleOutline style={{ color: "#fff", fontSize: "2rem", marginRight: "1rem" }} /> Add</button>
                        <button className='modalSubData editActionBtn'><AiFillEdit style={{ color: "#fff", fontSize: "2rem", marginRight: "1rem" }} />Edit</button>
                        <button className='modalSubData deleteActionBtn'><AiFillDelete style={{ color: "#fff", fontSize: "2rem", marginRight: "1rem" }} /> Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
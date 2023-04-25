import React from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";

import ProfilePic from "../Assets/ProfilePic.jpg";
import { motion } from "framer-motion";

const TableDetail = () => {
    return (
        <>
            <motion.tr initial={{ opacity: 0, y: "60vh" }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, ease: "easeInOut" }} className='tableRowDetails'>
                <td className='colData photoData'><img className='volunteerPhoto' src={ProfilePic} alt='#allImg' /></td>
                <td className='colData nameData'>Digpal Singh Rathore</td>
                <td className='colData numData'>635177***2</td>
                <p className='colData emailData'>dsrathore123@gmail.com</p>
                <td className='colData actionData'>

                    <button className='colSubData addAction'><IoMdAddCircleOutline style={{ fontSize: "2rem", color: "mediumPurple" }} /></button>
                    <button className='colSubData editAction'><AiFillEdit style={{ fontSize: "2rem", margin: "0 1rem", color: "lightGreen" }} /></button>
                    <button className='colSubData deleteAction'><AiFillDelete style={{ color: "red", fontSize: "2rem", }} /></button>
                </td>
            </motion.tr>
        </>
    )
}

export default TableDetail
import React from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";

import { motion } from "framer-motion";
import axios from "axios";


const TableDetail = () => {
    const [data, setData] = React.useState([]);

    const response = async () => {
        const { data } = await axios.get("http://localhost:4000/getData");
        setData(data);
    }

    React.useEffect(() => {
        response();
    }, []);

    return (
        <>
            {
                data.map((all) => {
                    return (
                        <motion.tr key={all._id} initial={{ opacity: 0, y: "60vh" }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, ease: "easeInOut" }} className='tableRowDetails'>
                            <td className='colData photoData'>{all._id}</td>
                            <td className='colData nameData'>{all.name}</td>
                            <td className='colData numData'>{all.contactNum}</td>
                            <p className='colData emailData'>{all.email}</p>
                            <td className='colData actionData'>
                                <button className='colSubData addAction'><IoMdAddCircleOutline style={{ fontSize: "2rem", color: "mediumPurple" }} /></button>
                                <button className='colSubData editAction'><AiFillEdit style={{ fontSize: "2rem", margin: "0 1rem", color: "lightGreen" }} /></button>
                                <button className='colSubData deleteAction'><AiFillDelete style={{ color: "red", fontSize: "2rem", }} /></button>
                            </td>
                        </motion.tr>
                    )
                })
            }
        </>
    )
}

export default TableDetail
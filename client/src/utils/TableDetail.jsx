import React from 'react';
import { motion } from "framer-motion";
import axios from "axios";
import Modal from '../Components/Modal';

const TableDetail = () => {
    const [data, setData] = React.useState([]); // For Response Function
    const [data2, setData2] = React.useState([]); // For getOneData Function

    const response = async () => {
        const { data } = await axios.get("http://localhost:4000/data");
        setData(data);
    }

    const getOneData = async (id) => {
        const getData = (await axios.get(`http://localhost:4000/getById/${id}`)).data;
        setData2(getData);

        const detailBlock = document.getElementById("detailBlock");
        detailBlock.style.display = "none";
    }

    React.useEffect(() => {
        response();
    }, []);

    return (
        <>
            {
                data && data.map((all) => {
                    return (
                        <motion.tr key={all._id} initial={{ opacity: 0, y: "60vh" }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .5, ease: "easeInOut" }} className='tableRowDetails' id='detailBlock'>
                            <td className='colData photoData'>{all._id}</td>
                            <td className='colData nameData'>{all.name}</td>
                            <td className='colData numData'>{all.contactNum}</td>
                            <p className='colData emailData'>{all.email}</p>
                            <td className='colData actionData'>
                                <button className='getDetailsBtn' onClick={() => { getOneData(all._id) }}>Get Details</button>
                            </td>
                        </motion.tr>
                    );
                })
            }
            <div className='divModalContainer'>
                <div className='divModalPopUp'>
                    <Modal name={data2.name} email={data2.email} address={data2.address} id={data2._id} desig={data2.role} rank={data2.rank} />
                </div>
            </div>
        </>
    );
}

export default TableDetail
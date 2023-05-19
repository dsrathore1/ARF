import React from 'react';
import "../Styles/DashboardStyle.css";
import { VscJson } from "react-icons/vsc";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Table from '../utils/Table';

const Dashboard = () => {
    return (
        <>
            <div className='dashboardContainer'>
                <div className='dashboardHeadingRow'>
                    <h2 className='dashboardHeading'>Members</h2>
                    <button className='addNewBtn dashboardBtns'> Add New <AiOutlineUsergroupAdd style={{ fontSize: "1.5rem", marginLeft: "4px" }} /> </button>
                    <button className='importJsonFileBtn dashboardBtns'>Import JSON <VscJson style={{ fontSize: "1.5rem", marginLeft: "4px" }} /></button>
                    <button className='exportExcelBtn dashboardBtns'> Export Excel <SiMicrosoftexcel style={{ fontSize: "1.5rem", marginLeft: "4px" }} /></button>
                </div>
                <div className='dashboardMainContainer'>
                    <Table />
                </div>
            </div>
        </>
    );
}

export default Dashboard
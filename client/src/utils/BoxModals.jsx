import React from 'react';
import "../Styles/BoxModalsStyle.css";



const BoxModals = ({title, para, img}) => {
    return (
        <>
            <div className='modalMainContainer'>
                <div className='modalContainer'>
                    <img className='modalImg' src={img} alt='' />
                    <div className='modalHeadings'>
                        <h2 className='modalTitle'>{title}</h2>
                        <p className='modalPara'>{para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxModals
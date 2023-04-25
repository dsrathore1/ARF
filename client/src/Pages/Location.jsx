import React from 'react'
import "../Styles/LocationStyle.css";


const Location = () => {
    React.useEffect(() => {
        document.title = "Disaster Location";
    });


    return (
        <>
            <h1 className='hoga'>Location</h1>
        </>
    )
}

export default Location
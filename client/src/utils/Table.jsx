import React from 'react'
import TableDetail from './TableDetail'

const Table = () => {

    return (
        <>
            <table className='mainDetailRow'>
                <tr className='tableRow'>
                    <th className='rowHeading photo'>Unique ID</th>
                    <th className='rowHeading name'>Name</th>
                    <th className='rowHeading mobile'>Mobile</th>
                    <th className='rowHeading email'>Email</th>
                    <th className='rowHeading action'>Details</th>
                </tr>
                {/* Detail Area */}
                <TableDetail />
                {/* Detail Area */}
            </table>
        </>
    )
}

export default Table
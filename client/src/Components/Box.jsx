import React from 'react';
import "../Styles/BoxStyle.css";
import { motion } from "framer-motion";

const Box = () => {
    return (
        <motion.div initial={{ opacity: 0, x: "-90vw" }} animate={{
            x: 0,
            opacity: 1,
            rotate: -55,
            scale: 1.2,
            borderRadius: "3rem"
        }} transition={{ duration: 5, type: "spring", bounce: .4 }} className='transparentBox' ></motion.div>
    )
}

export default Box
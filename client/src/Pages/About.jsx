import React, { useEffect } from 'react'
import "../Styles/AboutStyle.css";
import Box from '../Components/Box';
import AboutImg from "../Assets/team.svg";
import { motion } from "framer-motion";
import BoxModals from '../utils/BoxModals';
import Stamp from "../Assets/Icons/stamp.png";
import Location from "../Assets/Icons/location.png";
import Start from "../Assets/Icons/start.png";
import Contact from "../Assets/Icons/contact.png";
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';


const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    return (
        <>
            <Nav />
            <div className='aboutMainContainer'>
                <div className='allHeadings'>
                    <Box />
                    <h1 className='aboutHeading'>Automating <br /> & Responsive Force</h1>
                    <h1 className='aboutHeading2'>Emergency Responser</h1>
                </div>
                <div className='allPara'>
                    <p className='introPara'>
                        In the event of natural disasters such as floods, earthquakes, hurricanes, or wildfires, it is crucial to have a rapid and efficient response system to ensure the safety of those affected. In the aftermath of natural disasters, there is often a shortage of trained NCC/NSS cadets who can provide immediate assistance to those affected. During natural disasters, it can be difficult to locate and reach people who need assistance, especially in remote or inaccessible areas. In many cases, natural disasters can cause significant damage to critical infrastructure, making it difficult to coordinate response efforts. To overcome these problems, this system will provide a reliable and centralized system for mobilizing ex-servicemen and trained NCC/NSS cadets to disaster sites, who are nearby the disaster site and reducing the reliance on centralized infrastructure.
                    </p>
                    <motion.img initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3 }}
                        className='aboutImg' src={AboutImg} alt='#' ></motion.img>
                </div>
                <div className='allServicesContainer'>
                    <h1 className='allServices'>We have immediate response</h1>
                    <p className='subPara'>Our mission is to empower organizations to provide quick <br /> and  immediate response to the victims.</p>
                    <div className='boxesModal'>
                        <BoxModals title={"Get in touch"} para={"An invitation to connect, Impress it upon letters, a symbol of respect. Sealing the bond, with every message sent."} img={Stamp} />
                        <BoxModals title={"Location"} para={"Emergency response, a crucial guide, Coordinates and maps, helping rescuers stride. Saving lives, with precision and speed, side by side."} img={Location} />
                        <BoxModals title={"Technical Assistance"} para={"Need assistance implementing accessibility? ARF's expert trainees can provide the assistance you need."} img={Start} />
                        <BoxModals title={"Professional Teams"} para={"United in purpose and goal,Pooling diverse skills, achieving more as a whole. Collaboration and synergy, their success they extol."} img={Contact} />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About
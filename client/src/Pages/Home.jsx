import React from "react";
import "../../src/Styles/HomeStyle.css";
import PhoneImg from "../Assets/PhoneLogo.png";
import LocationImg from "../Assets/location-Icon.png";
import ProfilePic from "../Assets/ProfilePic.jpg";
import Alert from "../Assets/Alert.png";
import { motion } from "framer-motion";

const Home = (props) => {
  const [redBtn, setRedBtn] = React.useState(true);

  const handleBtn = () => {
    setRedBtn(!redBtn);
  };

  return (
    <div className="homeMainContainer">
      <div className="headingRow">
        <div className="locationsContainer">
          <img className="locationImg" src={LocationImg} alt="@" />
          <div className="locationPara">
            <p className="add">5200 Eubank Blvd. City...</p>
            <p className="dis">Disaster Location</p>
          </div>
        </div>
        <div className="center">
          <img className="alertIcon" src={Alert} alt="alert" />
          <h1 className="homeTitle">
            Emergency help
            <br /> needed!
          </h1>
        </div>
        <div className="profileContainer">
          <img className="profileImg" src={ProfilePic} alt="#" />
          <div className="profilePara">
            <p className="name">{props.name}</p>
            <p className="dis">DGNCC</p>
          </div>
        </div>
      </div>
      <p className="homeClick">Just click the button below</p>
      <motion.button
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 4,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        className="emergencyBtn"
        onClick={handleBtn}
        style={{background:redBtn? "#9370d8":"red" }}
      >
        <img className="btnImg" src={PhoneImg} alt="#" />
      </motion.button>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import "./Works.css";
import html from "../../img/Html.png";
import react from "../../img/react.png";
import javascript from "../../img/javascript.png";
import nodejs from "../../img/nodejs.png";
import mongodb from "../../img/mongodb.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            MERN
          </span>
          <span>FULLSTACK</span>
          <spane>
             I seek to work in a competitive field and ready to accept the
              challenges,
            <br />
            utilizing my skills, would like to work with a highly esteemed company .
            <br />
            which gives me a platform to use my expertise 
            <br />
            and  skills for mutual growth and benefit of company and myself
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

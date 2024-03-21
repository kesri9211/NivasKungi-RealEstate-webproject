//rafce
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";
import { easeIn, motion } from "framer-motion"; //for animation
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className=" hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: easeIn }}
            >
              Discover <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-dis">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily{" "}
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residance for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2, type:easeIn}}
          className="image-container">
            <img src="hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";
import { CiLocationOn } from "react-icons/ci";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <h1>
                Discover <br /> More Suitabel <br />
                Property
              </h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                Find a varitety of properties that suit you very easily
              </span>
              <span>
                Forget all difficulties in finding a residence for you{" "}
              </span>
            </div>

            <div className=" flexCenter search-bar">
              {/* <HILocationMarker color="var(--blue)" size={25}/> */}
              <CiLocationOn color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>

            {/* Stat Data */}
            <div className="flexCenter stat">
              <div className="flexColStart stat">
                <span className="primarytext">
                  <CountUp start={8800} end={9000} duration={2} />
                  <span>+</span>
                </span>
                <span className="secondarytext">Premium Product</span>
              </div>
              <div className="flexColStart stat">
                <span className="primarytext">
                  <CountUp start={1950} end={2000} duration={2} />
                  <span>+</span>
                </span>
                <span className="secondarytext">Happy Custmer</span>
              </div>
              <div className="flexColStart stat">
                <span className="primarytext">
                  <CountUp end={28} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondarytext">Award Wining</span>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className=" flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

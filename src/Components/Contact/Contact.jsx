import React from "react";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
          {/* left part */}
          <div className=" flexColStart c-left">
           
            <span className="orangeText">Our Contact</span>
            <span className="primaryText">Easy to contact us</span>
            <span className="secondaryText">We always ready to help by providing the best services for you.  </span>
          
            <div className="flexColStart contactModes">
              {/* first row */}
              <div className="flexColStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25}/>
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">7355400703</span>
                    </div>
                  </div>
                  <div className="flexCenter c-button">Call Now</div>
                </div>  
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React, {useState} from "react";
import {
  Accordion,
  AccordionItem,
  // AccordionHeading,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left section */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value image" />
          </div>
        </div>
        {/* right section */}
        <div className="flexColStart v-right">
          <span className="orangeText" >Our Value</span>
          <span className="primaryText" >Value we given to you</span>
          <span className="secondaryText" >
            We always be redy to provide you best service for you 
            <br />
             We belvie to good balance to live make you better
          </span>

          {/* accordian section */}
          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {
                data.map((item,i)=>{
                  const [className, setClassName]= useState(null)
                    return(
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="flexCenter accordionButton ">
                                  <AccordionItemState>
                                    {({expanded}) => expanded ? setClassName("expanded") :setClassName("collapsed") }
                                  </AccordionItemState>
                                    <div className="flexCenter icon">{item.icon}</div>
                                    <span className="primaryText">
                                        {item.heading}
                                    </span>
                                    <div className="flexCenter icon">
                                        <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                               <p className="secondaryText">{item.detail}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

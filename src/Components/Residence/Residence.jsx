import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residence.css";
import data from "../../utils/slider.json";
import {sliderSetting} from '../../utils/Common'

const Residence = () => {
return (    
    
<section className="r-wrapper">
    
    <div className="paddings innerWidth r-container">
    <div className="r-head flexColStart">
        <span className="orangeText">Best Choices</span>
        <span className="primaryText">Popular Residence</span>
    </div>

    <Swiper {...sliderSetting}>
        <SliderButtons/>
        {data.map((card, i) => {
                return(
        <SwiperSlide key={i}>
            <div className="flexColStart r-card">
            <img src={card.image} alt="home" />
            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
            </span>
            <span className="primaryText"> {card.name}</span>
            <span className="secondaryText">{card.detail}</span>
            </div>
        </SwiperSlide>
        );
        })}
    </Swiper>
    </div>
</section>
);
};

export default Residence;


const SliderButtons =()=>{
    const swiper =useSwiper();
    return(
        <div className=" flexCenter r-buttons">  
        <button onClick={()=> swiper.slidePrev()} >&lt;</button>
        <button onClick={()=>{swiper.slideNext()}} >&gt;</button>
        </div>
    );
};
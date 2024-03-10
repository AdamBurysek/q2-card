import { Swiper, SwiperSlide } from "swiper/react";

import { images } from "./images";

import "./slider.css";
import "swiper/css";

const Slider = () => {
  return (
    <div className="grid-item slider-container">
      <Swiper slidesPerView={"auto"} loop speed={1400} className="swiper">
        {images.map((slide, index) => (
          <SwiperSlide className="slide" key={index}>
            <img className="slide-image" src={slide.image}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

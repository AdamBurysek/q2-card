import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { images } from "./images";

import "./slider.css";
import "swiper/css";
import { useRef } from "react";

const Slider = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  return (
    <div className="grid-item slider-container">
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        loop
        speed={1400}
        className="swiper"
      >
        {images.map((slide, index) => (
          <SwiperSlide className="slide" key={index}>
            <img className="slide-image" src={slide.image}></img>
          </SwiperSlide>
        ))}
        <button className="see-more-button" onClick={handleNext}>
          See more photos
        </button>
        <button className="arrow-button" onClick={handleNext}>
          <img src="./slider-arrow.svg" />
        </button>
      </Swiper>
    </div>
  );
};

export default Slider;

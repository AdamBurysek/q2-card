import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { images } from "./images";

import "./slider.css";
import "swiper/css";

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
        className="swiper"
        speed={1400}
      >
        {images.map((slide, index) => (
          <SwiperSlide className="slide" key={index}>
            <motion.img
              className="slide-image"
              src={slide.image}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: index, delay: index / 3 }}
            />
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

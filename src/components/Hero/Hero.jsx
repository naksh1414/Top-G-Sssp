import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import Img from "../../assets/Hero/WhatsApp Image 2024-07-05 at 1.00.56 AM.jpeg";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[600px] w-full justify-center flex">
              <img
                className="object-fit object-center h-full w-full brightness-50"
                src={Img}
                alt="image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[600px] w-full justify-center flex">
              <img
                className=" object-fit object-center h-full w-full brightness-50"
                src={Img}
                alt="image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[600px] w-full justify-center flex">
              <img
                className=" object-fit object-center h-full w-full brightness-50"
                src={Img}
                alt="image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[600px] w-full justify-center flex">
              <img
                className=" object-fit object-center h-full w-full brightness-50"
                src={Img}
                alt="image"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
}

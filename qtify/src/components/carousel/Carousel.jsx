import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeft from "./carouselLeft/CarouselLeft";
import CarouselRight from "./carouselRight/CarouselRight";
import "swiper/css";
import styles from "./Carousel.module.css";

export default function Carousel({ data, componentRender }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={30}
        allowTouchMove
      >
        <CarouselRight />
        <CarouselLeft />

        {data.map((item, idx) => (
          <SwiperSlide key={idx} style={{ width: "auto" }}>
            {componentRender(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

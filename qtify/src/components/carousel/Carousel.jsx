import { Swiper, SwiperSlide } from "swiper/react";

const Carousel=()=>{
    return (
        <>
          <div>
            <Swiper>
                <Controls />
                <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </>
    )
}

export default Carousel;
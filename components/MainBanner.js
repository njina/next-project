import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainBanner = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <Image src="/images/mainbanner_1.jpg" alt="메인비주얼" width="1913" height="790" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/mainbanner_2.jpg" alt="메인비주얼" width="1913" height="790" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/mainbanner_3.jpg" alt="메인비주얼" width="1913" height="790" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/mainbanner_4.jpg" alt="메인비주얼" width="1913" height="790" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainBanner;

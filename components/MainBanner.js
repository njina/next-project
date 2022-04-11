import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Controller, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css/effect-fade";

const MainBanner = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      controller={{ control: controlledSwiper }}
      navigation={true}
      effect="fade"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
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

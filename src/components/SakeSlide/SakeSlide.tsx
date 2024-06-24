//swiper styles
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// swiper components
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// data
import type React from "react";
import { SAKE_SLIDE_IMGS } from "@/data/slides";
import AstroImage from "./AstroImage.astro";

SwiperCore.use([Autoplay, Navigation]);

export const SakeSlide: React.FC = () => {
  return (
    <Swiper
      autoplay={{ delay: 0 }}
      allowTouchMove={false}
      loop={true}
      speed={1000}
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={16}
    >
      {SAKE_SLIDE_IMGS.map((img) => (
        <SwiperSlide key={img.id}>
          <AstroImage
            imagePath={`src/assets/sake_slide/${img.src}`}
            altText="aa"
            name="aa"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

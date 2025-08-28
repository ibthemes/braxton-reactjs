import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const marqueeParts = Array.from({ length: 9 });
export default function MarqueeSlider() {
  return (
    <div className="marquee">
      <Swiper
        className="marquee__inner"
        slidesPerView={"auto"}
        modules={[Autoplay]}
        autoplay
        loop
        speed={5000}
      >
        {marqueeParts.map((_, index) => (
          <SwiperSlide
            style={{ width: "auto" }}
            key={index}
            className="marquee__part"
          >
            CV/Resume &amp; Creative Portfolio
            <div className="star">
              <i className="ph-bold ph-star-four" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

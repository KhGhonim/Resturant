import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
};

export default function PremiumSlider({ city }) {
  const PremiumAncle = useRef(null);
  const IsinViewPremiumAncle = useInView(PremiumAncle);
  return (
    <motion.div
      variants={parentVariants}
      ref={PremiumAncle}
      initial="hidden"
      animate={IsinViewPremiumAncle ? "visible" : "hidden"}
      className="w-full h-full p-3"
    >
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {city.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col gap-8 rounded">
            <img
              className="w-full h-full object-cover rounded"
              src={item.photo}
              alt={item.name}
            />
            <div>
              <h1 className="text-xl font-medium capitalize">{item.name}</h1>
              <h1 className="text-xl text-[#7E663A] capitalize">
                {item.location}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MapChart from "./MapChart";

const text = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.2,
    },
  },
};

export default function Map() {
  const TextHeadline = useRef(null);
  const isInViewHeadline = useInView(TextHeadline);
  const subtitle = useRef(null);
  const IsinViewSubtitle = useInView(subtitle);

  return (
    <div className="w-full h-dvh text-center text-white relative mt-[700px] md:mt-48 bg-black font-extrabold">
      <motion.p
        ref={TextHeadline}
        variants={text}
        initial="hidden"
        animate={isInViewHeadline ? "visible" : "hidden"}
        className="text-xl md:text-5xl text-white absolute left-1/4 top-20  -translate-x-1/2  z-50"
      >
        WE ARE SERVING ALL AROUND THE WORLD
      </motion.p>

      <MapChart />
      <motion.div
        ref={subtitle}
        variants={text}
        initial="hidden"
        animate={IsinViewSubtitle ? "visible" : "hidden"}
        className="text-base md:text-5xl text-[#AB8B4F] text-center w-full flex flex-row justify-center items-center gap-6 font-mono absolute bottom-20"
      >
        <p>3 Continent</p>
        <span>.</span>

        <p>7 Countries</p>
        <span>.</span>
        <p>20+ Restaurants</p>
      </motion.div>
    </div>
  );
}

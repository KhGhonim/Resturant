import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import PremiumSlider from "./PremiumSlider";

const Premium = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const PremiumOut = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export default function Dining({
  Gallary1,
  Gallary2,
  Gallary3,
  hight,
  py,
  cities,
}) {
  const PremiumAncle = useRef(null);
  const IsinViewPremiumAncle = useInView(PremiumAncle);
  const IsinViewPremiumOutAncle = useInView(PremiumAncle);

  return (
    <AnimatePresence mode="wait">
      <div className={`w-screen ${hight} flex flex-col bg-[#1D1D1D] text-white`}>
        <div
          ref={PremiumAncle}
          className="w-full h-1/3 flex flex-col md:flex-row justify-between"
        >
          <motion.div
            variants={Premium}
            initial="hidden"
            animate={IsinViewPremiumAncle ? "visible" : "hidden"}
            exit="exit"
            className="w-full md:w-1/2 flex flex-col p-20 items-center space-y-5 md:items-start md:space-y-10 "
          >
            <h4 className="text-xl md:text-3xl text-[#7E663A]">{Gallary1}</h4>
            <h1 className="text-2xl md:text-7xl font-bold relative group">{Gallary2}

            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#7E663A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-3"></span>

            </h1>
          </motion.div>
          <motion.div
            variants={PremiumOut}
            initial="hidden"
            animate={IsinViewPremiumOutAncle ? "visible" : "hidden"}
            exit="exit"
            className="w-full md:w-1/2  text-center  flex  items-center"
          >
            <h5 className="text-lg font-thin p-11 text-start ">
              {Gallary3}
            </h5>
          </motion.div>
        </div>

        <div className={`w-full h-full ${py}    pl-0 md:pl-36`}>
          <PremiumSlider city={cities} />
        </div>
      </div>
    </AnimatePresence>
  );
}

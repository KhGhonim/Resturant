import { motion, useScroll, useTransform } from "framer-motion";
import SteakImg from "../Assets/1.png";
import SteakImgWellDone from "../Assets/2.png";
import { useRef } from "react";

export default function Steak() {
  const SteakSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SteakSection,
    offset: ["start end", "end start"]
  });


  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "50%",  "0%"]);


  // Define the image position (fixed when in view, relative otherwise)
  const position = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["relative", "fixed", "fixed", "relative"]
  );


  return (
    <motion.div
  
      ref={SteakSection}
      className="w-full h-[200dvh] overflow-hidden relative"
    >
      <motion.div style={{ x }}  className="absolute inset-0 bg-black text-white"></motion.div>
      <motion.div style={{ position }}
        className=" top-[10vh] flex flex-col justify-center items-center "
      >
        <motion.div
        
          className=" w-full h-full flex justify-center items-center border-2 border-red-500"
        >
          <img src={SteakImg} alt="Steak" className="w-1/2 h-full" />
        </motion.div>

        <div className="w-full h-1/2">
          <div>
            {" "}
            <h1 className="text-center text-2xl md:text-7xl font-extrabold py-9">
              A MASTERPIECE OF STEAK
            </h1>
          </div>

          <div>
            <h4 className="text-center text-lg md:text-2xl font-thin p-4">
              {" "}
              Unlocking the flavour of steak is an art. It requires perfection,
              passion, and precision. It is about crafting the entire experience
              – one that’s delicate, yet strong, sensational, artisan, local yet
              global.
            </h4>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

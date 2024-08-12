import { motion, useScroll, useTransform } from "framer-motion";
import SteakImg from "../Assets/1.png";
import SteakImgWellDone from "../Assets/2.png";
import { useRef } from "react";
export default function Steak() {
  const SteakSection = useRef(null);
  // Use the scroll hook to get the scrollY progress (0 to 1)
  const { scrollYProgress } = useScroll({
    target: SteakSection,
    offset: ["end end", "end start"],
  });

  // Use transform to map scrollYProgress to background color change
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#000000"]
  );

  // Use transform to map scrollYProgress to background x-axis movement
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <motion.div
      ref={SteakSection}
      className="w-full h-[200dvh] overflow-hidden relative"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className=" flex flex-col justify-center items-center z-50">
        <div className=" border-2 border-red-200">
          <div className=" w-full h-full">
            <img src={SteakImg} alt="Steak" className="w-full h-full" />
            {/* <img src={SteakImgWellDone} alt="Steak" className="w-full h-full" /> */}
          </div>
        </div>

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
      </div>
    </motion.div>
  );
}

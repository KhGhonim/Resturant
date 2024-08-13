import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const h1 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};

const Image = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};
const Text = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};

export default function Experoience({
  Title,
  Photo,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  PT,
  top,
  hight,
}) {
  const refH1 = useRef(null);
  const isInViewH1 = useInView(refH1);

  const refImage = useRef(null);
  const isInViewImage = useInView(refImage);

  const refText = useRef(null);
  const isInViewText = useInView(refText);
  return (
    <div className={`!text-black w-full  ${hight} text-center`}>
      <AnimatePresence mode="wait">
        <div
          className={`flex flex-col justify-center items-center md:flex-row ${PT} relative`}
        >
          <motion.div
            ref={refH1}
            variants={h1}
            initial="hidden"
            animate={isInViewH1 ? "visible" : "hidden"}
            className={`text-3xl md:text-7xl text-black font-extrabold absolute top-36 md:w-[1000px] z-50 ${top}`}
          >
            <motion.h1> {Title}</motion.h1>
          </motion.div>{" "}
          <motion.div
            ref={refImage}
            variants={Image}
            initial="hidden"
            animate={isInViewImage ? "visible" : "hidden"}
            className="w-full md:w-1/2"
          >
            <img
              src={Photo}
              alt="Expero"
              className="w-full h-full object-cover "
            />
          </motion.div>
          <motion.div
            ref={refText}
            variants={Text}
            initial="hidden"
            animate={isInViewText ? "visible" : "hidden"}
            className="w-full md:w-1/2 space-y-6 p-16 font-mono"
          >
            <p className="text-3xl text-start">{Subtitle1}</p>
            <p className="text-xl text-start">{Subtitle2}</p>
            <p className="text-start">{Subtitle3}</p>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

import Marquee from "react-fast-marquee";

export default function Marque({ title1, title2, title3, title4 }) {
  return (
    <Marquee
      className="w-screen h-36 bg-black text-[#9B9B9B] text-3xl font-extrabold   "
      speed={150}
      play
      direction="left"
      loop={0}
      style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}
    >
      <div className="mr-4 px-4 font-mono">{title1}</div>
      <div className="mr-4 px-4 font-mono text-[#7E663A]">/</div>
      <div className="mr-4 px-4 font-mono">{title2}</div>
      <div className="mr-4 px-4 font-mono text-[#7E663A]">/</div>
      <div className="mr-4 px-4 font-mono">{title3}</div>
      <div className="mr-4 px-4 font-mono text-[#7E663A]">/</div>
      <div className="mr-96 px-4 font-mono">{title4}</div>
    </Marquee>
  );
}

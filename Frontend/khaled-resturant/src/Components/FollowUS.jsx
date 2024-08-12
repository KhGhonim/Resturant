import Portfolio from "../Assets/Portfolio.png";
import GroceryStore from "../Assets/grocery store.png";
import Newspaper from "../Assets/download.png";
import PajmaHouse from "../Assets/Pijama evi.png";
import { Link } from "react-router-dom";
const MyProjects = [
  {
    src: Portfolio,
    alt: "Portfolio",
    link: "https://khaled-ghonim-portfolio.vercel.app/Developer",
  },
  {
    src: Newspaper,
    alt: "Newspaper",
    link: "https://news-paper-ruby.vercel.app/",
  },
  {
    src: GroceryStore,
    alt: "GroceryStore",
    link: "https://grocery-store-beta.vercel.app/",
  },
  {
    src: PajmaHouse,
    alt: "PajmaHouse",
    link: "https://pijamahouse-e1870.web.app/",
  },
];

export default function FollowUS() {
  return (
    <div className="w-full h-full bg-[#171717] flex justify-center items-center text-white ">
      <div className="py-10 space-y-16">
        <h2 className="text-center text-2xl font-bold mb-4 text-[#AB8B4F]">
          See My Other Projects & More...
        </h2>
        <h1 className="text-center text-4xl font-extrabold mb-6">
          I'M KHALED GHONIM
        </h1>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center space-x-4 ">
          {MyProjects.map((project, index) => (
            <Link key={index} className="relative " to={""}>
              <img
                src={project.src}
                alt={project.alt}
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-600 animate-pulse text-white text-xs px-2 py-1 rounded">
                @KG
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center text-lg mt-4">@Khaled_Ghonim_Devs</p>
      </div>
    </div>
  );
}

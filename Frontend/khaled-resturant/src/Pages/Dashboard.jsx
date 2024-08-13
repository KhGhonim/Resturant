import { Box } from "@mui/material";
import Header from "../Components/Header";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import banner1 from "../Assets/banner1.jpg";
import banner2 from "../Assets/banner2.jpg";
import banner3 from "../Assets/banner3.jpg";
import banner4 from "../Assets/banner4.jpg";
import banner5 from "../Assets/banner5.jpg";
import Experience from "../Assets/experiences.jpg";
import newYorkSteak from "../Assets/newYorkSteak.jpg";

import useMediaQuery from "@mui/material/useMediaQuery";
import Experoience from "../Components/Experoience";
import Map from "../Components/Map";
import Steak from "../Components/Steak";
import Marque from "../Components/Marque";
import Dining from "../Components/Dining";
import FollowUS from "Components/FollowUS";

const cities1 = [
  {
    name: "NEW YORK",
    photo: "https://images.otstatic.com/prod1/53682775/1/huge.jpg",
    location: "new york",
  },
  {
    name: "NY MEATPACKING",
    photo:
      "https://www.tpgarchitecture.com/archidata4/tpg/assets/prev/project_1999/23907_811DC2BF-A268-8839-860E715BF404C399_lg.jpg",
    location: "ny meatpacking",
  },
  {
    name: "MIAMI",
    photo:
      "https://images.squarespace-cdn.com/content/v1/57916842bebafb827652722c/1505828007923-H2W8YIRM2HRV251TYAAL/Nusr-et%2C+The+Infamous+Turkish+Steakhouse+by+Salt+Bae+Nusret+G%C3%B6k%C3%A7e%2C+is+Finally+Coming+to+Miami",
    location: "miami",
  },
  {
    name: "DALLAS",
    photo:
      "https://cloudfront-us-east-1.images.arcpublishing.com/dmn/BJEOL5TMVNHCHPTVEQT54YWZ6Q.jpg",
    location: "dallas",
  },
  {
    name: "BEVERLY HILLS",
    photo: "https://images.otstatic.com/prod1/46839746/3/huge.jpg",
    location: "beverly hills",
  },
  {
    name: "LAS VEGAS",
    photo: "https://www.tagvenue.com/upload/b1/e2/57634-entire-venue-room.jpg",
    location: "las vegas",
  },
  {
    name: "LONDON",
    photo:
      "https://barbarossa.co.uk/wp-content/uploads/2021/02/Nusret-006.jpeg",
    location: "london",
  },
  {
    name: "MYKONOS",
    photo: "https://images.otstatic.com/prod1/41973791/2/huge.jpg",
    location: "mykonos",
  },
];

const cities2 = [
  {
    name: "YALIKAVAK",
    photo:
      "https://yalikavakmarina.com.tr/wp-content/uploads/2023/11/Nusret-1.jpg",
    link: "/yalikavak",
  },
  {
    name: "SANDAL BEDESTENI",
    photo:
      "https://www.iamistanbul.com/images/yer/18006_SANDAL_BEDESTEN%C4%B0_TUR%C4%B0ZMLE.COM_.jpg",
    link: "/sandal-bedesteni",
  },

  {
    name: "BEBEK",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/fe/a4/cb/nusr-et-burger-bebek.jpg",
    link: "/bebek",
  },
  {
    name: "ANKARA",
    photo: "https://www.meyhankoli.com/img/cropped/nusr-et-steakhouse-4658.jpg",
    link: "/ankara",
  },
  {
    name: "RIYADH",
    photo:
      "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/11/24/2931736-1346313893.png?itok=lX0VO0Fk",
    link: "/riyadh",
  },
  {
    name: "ABU DHABI",
    photo:
      "https://tricon.co.uk/wp-content/uploads/2017/04/Nusr-Et-Tricon-Restauant-3-2.jpg",
    link: "/abu-dhabi",
  },
  {
    name: "DUBAI",
    photo:
      "https://wearebishopdesign.com/application/files/cache/16c7a0ce789885ddc6ec954d3858b50c.jpg",
    link: "/dubai",
  },
  {
    name: "DOHA",
    photo:
      "https://ucarecdn.com/dd9b7731-75b5-4362-914b-834455d4f5b0/-/scale_crop/870x500/",
    link: "/doha",
  },
];
function Dashboard() {
  const IsScreenLarge = useMediaQuery("(min-width:950px)");

  return (
    <div>
      <Helmet>
        <title>Khaled Ghonim's family restaurant</title>
      </Helmet>

      <div className="overflow-hidden">
        <Header />

        <Swiper
          autoplay={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          // style={{background:"opacity 500ms linear 0s"}}
        >
          <SwiperSlide>
            {IsScreenLarge ? (
              <img style={{ height: "100dvh" }} src={banner1} alt="" />
            ) : (
              <img style={{ height: "100dvh" }} src={banner1} alt="" />
            )}
            <Box
              sx={{
                position: "absolute",
                color: "white",
                top: { xs: "30%", md: "35%" },
                left: { xs: "0%", md: "32.5%" },
              }}
              className="text"
            >
              <p
                style={{
                  background:
                    " linear-gradient(90deg, rgba(121,9,9,1) 29%, rgba(255,0,98,0) 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "75px",
                  textShadow: "-3px 1px 26px rgba(255,0,0,0.74)",
                }}
              >
                No Salt No Life
              </p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            {IsScreenLarge ? (
              <img style={{ height: "100dvh" }} src={banner2} alt="" />
            ) : (
              <img style={{ height: "100dvh" }} src={banner2} alt="" />
            )}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {IsScreenLarge ? (
              <img style={{ height: "100dvh" }} src={banner3} alt="" />
            ) : (
              <img style={{ height: "100dvh" }} src={banner3} alt="" />
            )}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {IsScreenLarge ? (
              <img style={{ height: "100dvh" }} src={banner4} alt="" />
            ) : (
              <img style={{ height: "100dvh" }} src={banner4} alt="" />
            )}
          </SwiperSlide>{" "}
          <SwiperSlide>
            {IsScreenLarge ? (
              <img style={{ height: "100dvh" }} src={banner5} alt="" />
            ) : (
              <img style={{ height: "100dvh" }} src={banner5} alt="" />
            )}
          </SwiperSlide>
        </Swiper>

        <Experoience
          Title={`A SPECTACULAR MEAT FEAST FOR ALL YOUR SENSES`}
          Photo={Experience}
          Subtitle1={"Nusr-Et Experience"}
          Subtitle2={`  You will taste an exquisite menu, be mesmerised by fantastic
              aromas, enchanted by everything you touch, fascinated by
              everything you hear. You will see glamorous people, delightful
              presentations and incredible shows. Be entertained, amused and
              pampered: a guaranteed luxury dining experience like never
              before...`}
          Subtitle3={`  All your senses will be fully satisfied!`}
          Subtitle4={undefined}
          PT={"pt-72"}
          top={"top-36"}
          hight={"h-dvh"}
        />
        <Map />
        {/* <Steak /> */}
        <Marque
          title1={`Great Food`}
          title2={`Great Experience`}
          title3={`  A Spectacular Meat Feast For All Your Senses`}
          title4={`Great Atomosphere`}
        />
        <Dining
          Gallary1={`  Ultra Premium`}
          Gallary2={`  DINING REINVENTED`}
          Gallary3={`  Nusr-Et is an internationally acclaimed destination, serving
              celebrity clientele. Its globally praised, unique concept combines
              an innovative menu with impeccable service and great fun.`}
          hight={`h-[180dvh]`}
          py={`py-36 md:py-64`}
          cities={cities1}
        />
        <Experoience
          Title={`NUSR-ET SPECIAL`}
          Photo={newYorkSteak}
          Subtitle1={`Signature Dishes`}
          Subtitle2={`With a world-class meat selection and innovative approach, Nusr-Et Steakhouse opens the door to a unique culinary culture.`}
          Subtitle3={`From its starters such as Beef Carpaccio, Steak Tartar, and more to Tomahawk, Toscano, Saslık, and other main flavors prepared on the char-grill, the heart of its cuisine, Nusr-Et invites its guests on an extraordinary gastronomy journey.`}
          Subtitle4={undefined}
          PT={"pt-0"}
          top={"top-16"}
          hight={"h-full"}
        />
        <Marque
          title1={` Exquisite Cuisine`}
          title2={`Unforgettable Journey`}
          title3={` A Sensory Meat Feast Beyond Compare`}
          title4={`Captivating Ambiance`}
        />
        <Dining
          Gallary1={`Gallary`}
          Gallary2={`All Gallary`}
          Gallary3={undefined}
          hight={`h-[150dvh]`}
          py={`py-32 md:py-64`}
          cities={cities2}
        />

        <FollowUS/>
      </div>
    </div>
  );
}

export default Dashboard;

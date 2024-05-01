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
import useMediaQuery from "@mui/material/useMediaQuery";

function Dashboard() {
  const IsScreenLarge = useMediaQuery("(min-width:950px)");

  return (
    <div>
      <Helmet>
        <title>Khaled Ghonim's family restaurant</title>
      </Helmet>

      <Box>
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
              <img style={{height:"100dvh"}} src={banner1} alt="" />
            ) : (
              <img style={{ height: "100dvh" }} src={banner1} alt="" />
            )}
            <Box
              sx={{
                position: "absolute",
                color: "white",
                top: { xs: "30%", md: "35%" },
                left: { xs: "20%", md: "35%" },
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
      </Box>
    </div>
  );
}

export default Dashboard;

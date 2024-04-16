import { Box, Stack } from "@mui/material";
import UpperDrawer from "./Menu";
import Logo from "../Assets/nusret.svg";
import Reservation from "./Reservation";
import Resturant from "./Resturant";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
  const IsScreenLarge = useMediaQuery("(min-width:950px)");
  const [Scrolled, setScrolled] = useState("absolute");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 70) {
        setScrolled("fixed");
      } else {
        setScrolled("absolute");
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Scrolled]);
  return (
    <Box
      className="HeaderContainer"
      sx={{
        bgcolor: "transparent",
        top: 0,
        left: 0,
        zIndex: 999,
        width: "98%",
        justifyContent: "space-between",
        alignItems: { xs: "center", sm: "inherit" },
        p: 1,
        display: "flex",
        position: Scrolled,
        transition: "all 0.5s ease-in-out",
      }}
    >
      <UpperDrawer />
      <Box sx={{ mt: 1 }}>
        <NavLink to="/">
          {IsScreenLarge ? (
            <img
              style={{
                maxWidth: "230px",
                position: "absolute",
                left: "alc(50% - 115px)",
              }}
              src={Logo}
              alt="Logo"
            />
          ) : (
            <img style={{ maxWidth: "130px" }} src={Logo} alt="Logo" />
          )}
        </NavLink>
      </Box>
      <Stack alignItems={"center"} direction={"row"} gap={3}>
        <Resturant />
        <Reservation />
      </Stack>
    </Box>
  );
}

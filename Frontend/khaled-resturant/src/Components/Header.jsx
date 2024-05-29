import { Box, IconButton, Stack } from "@mui/material";
import UpperDrawer from "./Menu";
import Logo from "../Assets/nusret.svg";
import Reservation from "./Reservation";
import Resturant from "./Resturant";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PopupCart from "./PopupCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const IsScreenLarge = useMediaQuery("(min-width:950px)");
  const [Scrolled, setScrolled] = useState("absolute");
  const [Close, setClose] = useState(false);

  const HandleCartCloser = () => {
    setClose(!Close);
  };
  // @ts-ignore
  const { SelectedProducts } = useSelector((state) => state.CartShop);

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
        {SelectedProducts.length > 0 ? (
          <div>
            <IconButton
              onClick={() => {
                setClose(!Close);
              }}
              aria-label="cart"
            >
              <StyledBadge
                badgeContent={SelectedProducts.length}
                color="secondary"
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            {Close === true ? (
              <PopupCart HandleCartCloser={HandleCartCloser} />
            ) : null}
          </div>
        ) : null}

        <Reservation />
      </Stack>
    </Box>
  );
}

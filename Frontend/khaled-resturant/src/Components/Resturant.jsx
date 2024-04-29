import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Close } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Reservation from "./Reservation";
import Logo from "../Assets/nusret.svg";

const cities = [
  {
    name: "NEW YORK",
    photo: "https://images.otstatic.com/prod1/53682775/1/huge.jpg",
    link: "/new-york",
  },
  {
    name: "NY MEATPACKING",
    photo:
      "https://www.tpgarchitecture.com/archidata4/tpg/assets/prev/project_1999/23907_811DC2BF-A268-8839-860E715BF404C399_lg.jpg",
    link: "/ny-meatpacking",
  },
  {
    name: "MIAMI",
    photo:
      "https://images.squarespace-cdn.com/content/v1/57916842bebafb827652722c/1505828007923-H2W8YIRM2HRV251TYAAL/Nusr-et%2C+The+Infamous+Turkish+Steakhouse+by+Salt+Bae+Nusret+G%C3%B6k%C3%A7e%2C+is+Finally+Coming+to+Miami",
    link: "/miami",
  },
  {
    name: "DALLAS",
    photo:
      "https://cloudfront-us-east-1.images.arcpublishing.com/dmn/BJEOL5TMVNHCHPTVEQT54YWZ6Q.jpg",
    link: "/dallas",
  },
  {
    name: "BEVERLY HILLS",
    photo: "https://images.otstatic.com/prod1/46839746/3/huge.jpg",
    link: "/beverly-hills",
  },
  {
    name: "LAS VEGAS",
    photo: "https://www.tagvenue.com/upload/b1/e2/57634-entire-venue-room.jpg",
    link: "/las-vegas",
  },
  {
    name: "LONDON",
    photo:
      "https://barbarossa.co.uk/wp-content/uploads/2021/02/Nusret-006.jpeg",
    link: "/london",
  },
  {
    name: "MYKONOS",
    photo: "https://images.otstatic.com/prod1/41973791/2/huge.jpg",
    link: "/mykonos",
  },
];

const cities2 = [
  {
    name: "YALIKAVAK",
    photo:
      "https://yalikavakmarina.com.tr/wp-content/uploads/2018/05/Nusret-1.jpg",
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

export default function Resturant() {
  const navigate = useNavigate();
  const [Image, setImage] = useState("");
  const [Image2, setImage2] = useState("");
  const handleHover = (photo) => {
    setImage(photo);
  };
  const handleHover2 = (photo) => {
    setImage2(photo);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const IsScreenLarge = useMediaQuery("(min-width:950px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        height: anchor === "top" ? "100vh" : 250,
        width: anchor === "top" ? "100%" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ m: 2 }}>
        <IconButton
          sx={{ color: "white" }}
          size="large"
          onClick={toggleDrawer(anchor, true)}
        >
          <MenuIcon />
        </IconButton>

        <Box>
          <NavLink onClick={toggleDrawer(anchor, false)} to="/">
            {IsScreenLarge ? (
              <img
                style={{
                  maxWidth: "230px",
                  position: "absolute",
                  left: "alc(50% - 50% )",
                }}
                src={Logo}
                alt="Logo"
              />
            ) : (
              <img
                onClick={toggleDrawer(anchor, false)}
                style={{ maxWidth: "130px" }}
                src={Logo}
                alt="Logo"
              />
            )}
          </NavLink>
        </Box>

        <Stack direction={"row"} alignItems={"center"} gap={3}>
          <Reservation />
          <IconButton size="large" onClick={toggleDrawer(anchor, false)}>
            <Close />
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ height: "auto", mt: IsScreenLarge ? 15 : 10, mr: 2 }}
      >
        {IsScreenLarge ? (
          <Box width={"400px"} height={"400px"}>
            <img
              style={{
                width: "100%",
                height: Image ? "100%" : null,
                borderRadius: "10px",
                transition: "opacity 1s ease-in-out",
                opacity: Image ? 1 : 0,
                marginLeft: "15px",
              }}
              src={Image}
              alt=""
            />
          </Box>
        ) : null}

        <Stack
          width={"50%"}
          sx={{
            flexDirection: IsScreenLarge ? "row" : "column",
            justifyContent: "space-around",
          }}
        >
          <List>
            {cities.map((item) => (
              <ListItem
                sx={{
                  cursor: "pointer",
                  color: "white",
                  "&:hover": { color: "brown" },
                  ".MuiTypography-root": {
                    fontSize: IsScreenLarge ? "25px" : "18px",
                  },
                }}
                key={item.name}
                onClick={() => {
                  navigate(item.link);
                }}
                onMouseEnter={() => {
                  handleHover(item.photo);
                }}
                onMouseLeave={() => {
                  setImage(null);
                }}
                disablePadding
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>

          <List>
            {cities2.map((item) => (
              <ListItem
                sx={{
                  cursor: "pointer",
                  color: "white",
                  "&:hover": { color: "brown" },
                  ".MuiTypography-root": {
                    fontSize: IsScreenLarge ? "25px" : "18px",
                  },
                }}
                key={item.name}
                onClick={() => {
                  navigate(item.link);
                }}
                onMouseEnter={() => {
                  handleHover2(item.photo);
                }}
                onMouseLeave={() => {
                  setImage2(null);
                }}
                disablePadding
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Stack>

        {IsScreenLarge ? (
          <Box width={"400px"} height={"400px"}>
            <img
              style={{
                width: "100%",
                height: Image2 ? "100%" : null,
                borderRadius: "10px",
                transition: "opacity 1s ease-in-out",
                opacity: Image2 ? 1 : 0,
              }}
              src={Image2}
              alt=""
            />
          </Box>
        ) : null}
      </Stack>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Stack
            sx={{
              cursor: "pointer",
              "&:hover .icon": { color: "red", transition: "all 0.3s linear" },
              "&:hover .Restaurants": {
                letterSpacing: "2px",
                transition: "all 0.3s linear",
              },
              textAlign: "center",
              textTransform: "uppercase",
              color: "white",
            }}
            onClick={toggleDrawer(anchor, true)}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {IsScreenLarge ? (
              <h3 className="Restaurants">Restaurants</h3>
            ) : null}
            <span style={{ marginLeft: "5px" }} className="icon">
              <LocationOnIcon />
            </span>
          </Stack>
          <SwipeableDrawer
            // @ts-ignore
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

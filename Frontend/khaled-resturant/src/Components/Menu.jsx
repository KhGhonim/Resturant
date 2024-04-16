import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Stack, useMediaQuery } from "@mui/material";
import Resturant from "./Resturant";
import Reservation from "./Reservation";
import Logo from "../Assets/nusret.svg";

const MenuObjects = [
  {
    text: "A PIONEERING ICON NUSRET GÖKÇE",
    link: "https://example.com/nusret-gokce",
  },
  {
    text: "DISTINCTIVE VENUES WITH A SOUL",
    link: "https://example.com/distinctive-venues",
  },
  {
    text: "SIGNATURE DISHES",
    link: "https://example.com/signature-dishes",
  },
  {
    text: "JOIN THE DREAM TEAM",
    link: "https://example.com/dream-team",
  },
  {
    text: "WE ARE A FAMILY",
    link: "https://example.com/we-are-family",
  },
  {
    text: "GLOBAL PRESENCE",
    link: "https://example.com/global-presence",
  },
  {
    text: "FOR INVESTORS",
    link: "https://example.com/for-investors",
  },
  {
    text: "GALLERY",
    link: "https://example.com/gallery",
  },
];

export default function UpperDrawer() {
  const navigate = useNavigate();
  const IsScreenLarge = useMediaQuery("(min-width:950px)");

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        width: anchor === "top" ? "97%" : 250,
        mt: 2,
      }}
      role="presentation"
    >
      <Stack
        sx={{
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: "row",
          my: 1,
        }}
      >
        <IconButton onClick={toggleDrawer(anchor, false)} size="large">
          <Close />
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

        <Stack direction={"row"} gap={3}>
          <Resturant />
          <Reservation />
        </Stack>
      </Stack>

      <List sx={{ mt: IsScreenLarge? 8: 3 }}>
        {MenuObjects.map((item) => (
          <ListItem
            sx={{
              textAlign: "center",
              cursor: "pointer",
              "&:hover": { color: "brown" },
              "&:hover .MuiTypography-root ": { letterSpacing: 2,  },
              ".MuiTypography-root ": { fontSize:IsScreenLarge? "30px" : "18px"  },
              width:"auto",
              color: "white",
              mt: 1,
              
            }}
            key={item.text}
          >
            <ListItemText
              onClick={() => {
                navigate(item.link);
              }}
              primary={item.text}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            sx={{ color: "white" }}
            size="large"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>

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

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import {
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import Logo from "../Assets/nusret.svg";
import { NavLink } from "react-router-dom";
import CheckBox from "./CheckBox";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ReservationHero from "./ReservationHero";
import Products from "./Products";
import CardItem from "./Card";
import axios from "axios";

export default function Reservation() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [alignment, setAlignment] = useState("Dishes");
  const [InputValue, setInputValue] = useState("");
  const [RadioValue, setRadioValue] = useState(null);
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Api/Food").then((res) => {
      setFoodData(res.data);
    });
  }, []);

  //For Buttons in ReservationHero
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  //For Input in ReservationHero
  const handlechange = (eo) => {
    let value = eo.target.value;
    setInputValue(value);
  };

  //For Selected Ratio in ReservationHero
  const HandleRadioChange = (eo) => {
    let value = eo.target.value;
    setRadioValue(value);
  };

  const FilteredItems = FoodData.filter((item) => {
    return item.name.toLowerCase().indexOf(InputValue.toLowerCase()) !== -1;
  });


const FiltiringProducts = (InputValue) => {
  let Food = FoodData

  if (InputValue) {
    Food = FilteredItems
  }
    return Food.map(({ name, category, imageLink, city }) => (
      <CardItem
        city={city}
        imageLink={imageLink}
        category={category}
        name={name}
        key={Math.random()}
      />
    ));
}











  // function filteredData(products, alignment, InputValue) {
  //   let filteredProducts = products;

  //   // Filtering Input Items
  //   if (InputValue) {
  //     filteredProducts = FiltiredData;
  //   }

  //   // Applying selected filter
  //   if (alignment) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ city, category, name }) =>
  //         city === alignment ||
  //         category === alignment ||
  //         name === alignment
  //     );
  //   }

  //   return filteredProducts.map(({ imageLink, name, category, city }) => (
  //     <CardItem
  //       imageLink={imageLink}
  //       name={name}
  //       category={category}
  //       city={city}
  //       key={Math.random()}
  //     />
  //   ));
  // }

  const result = FiltiringProducts(alignment, RadioValue, InputValue);

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
        display: "flex",
        position: "relative",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        sx={{
          bgcolor: "black",
          color: "white",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        width={"230px"}
        height={"100%"}
      >
        <Box my={2}>
          <Box>
            <Typography textAlign={"center"} variant="body1" color="inherit">
              Reserve Your Table <FastfoodIcon />
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ border: "0.5px solid grey", my: 1 }} />

        <Box>
          <h4 style={{ textAlign: "center" }}>Catagory</h4>

          <CheckBox
            FristName={"Dinner"}
            SecoundName={"Lanuch"}
            ThirdName={"Brunch"}
            CatagoryName={"Meals"}
            HandleRadioChange={HandleRadioChange}
          />
          <CheckBox
            FristName={"Burger"}
            SecoundName={"Steak"}
            ThirdName={"Golden Meat"}
            CatagoryName={"Dishes"}
            HandleRadioChange={HandleRadioChange}
          />
          <CheckBox
            FristName={"Ankara"}
            SecoundName={"NYC"}
            ThirdName={"Dubai"}
            CatagoryName={"City"}
            HandleRadioChange={HandleRadioChange}
          />
        </Box>
      </Stack>

      <Box sx={{ position: "absolute", left: "40%", mt: 2 }}>
        <NavLink to="/">
          {IsScreenLarge ? (
            <img
              style={{
                maxWidth: "230px",
              }}
              src={Logo}
              alt="Logo"
            />
          ) : null}
        </NavLink>
      </Box>

      <IconButton
        sx={{ position: "absolute", top: "3px", right: "7px", mt: 2 }}
        onClick={toggleDrawer(anchor, false)}
      >
        <Close />
      </IconButton>
      <Stack width={"100%"}>
        <ReservationHero
          alignment={alignment}
          handleAlignment={handleAlignment}
          InputValue={InputValue}
          handlechange={handlechange}
        />
        <Container>
          <Products result={result} />
        </Container>
      </Stack>
    </Box>
  );

  return (
    <Box>
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
              <h3 className="Restaurants">Reserve Your Table</h3>
            ) : null}

            <span
              style={{
                marginLeft: "5px",
                boxShadow: "drop-shadow(0px 0px 50px #999999)",
              }}
              className="icon"
            >
              <RoomServiceIcon />
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
    </Box>
  );
}

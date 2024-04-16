import express from "express";
const server = express();
const port = 3000;
import mongoose from "mongoose";
import cors from "cors";
import food from "./db/Data/Data.js";
server.use(cors({ origin: "http://localhost:3001" }));

server.get("/", (req, res) => {
  res.send("Welcome to the database server");
});

server.get("/Api/Food", (req, res) => {
  try {
    res.send(food);
  } catch (error) {
    console.log(error.message);
  }
});

mongoose
  .connect(
    "mongodb+srv://KhaledRestaurant:LodaBey@resturant.lju1e7z.mongodb.net/?retryWrites=true&w=majority&appName=Resturant"
  )
  .then(() => {
    server.listen(port, () => {
      console.log(`The app is listening at : http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

import express from "express";
const server = express();
const port = 3000;
import mongoose from "mongoose";

const db = mongoose
  .connect(
    "mongodb+srv://KhaledRestaurant:LodaBey@resturant.lju1e7z.mongodb.net/?retryWrites=true&w=majority&appName=Resturant"
  )
  .then(() => {
    server.listen(port, () => {
      console.log(`The app is listening at : http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

export default db;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import MongoDB from "./Config/MongoDB.js";
import FoodRoutes from "./Api/Routes/FoodOrderRoute.js";

// Server
const server = express();
const port = 3000;

// Middleware
server.use(express.json());
dotenv.config();
server.use(cors({ origin: "*" }));

// Basic Route
server.get("/", (req, res) => {
  res.send("Welcome to the database server");
});
// Routes
server.use("/Api", FoodRoutes);

// Error Handling

// Connection
const startServer = async () => {
  await MongoDB();
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

startServer();

import express from "express";
import {
  AddMenu,
  DeleteAFoodFromMenu,
  OderFood,
  OderSpecificFood,
  UpdateMenu,
} from "../Controllers/FoodOrderController.js";
const router = express.Router();

router.get("/Food", OderFood);
router.post("/Food", AddMenu);
router.post("/Food/Update", UpdateMenu);
router.post("/Food/Delete", DeleteAFoodFromMenu);
router.get("/Food/:id", OderSpecificFood);

export default router;

import FoodModel from "../Models/FoodModel.js";

export const OderFood = async (req, res, next) => {
  try {
    const food = await FoodModel.find();
    res.send(food);
  } catch (error) {
    res.status(500).send("Could not found food");
  }
};

export const OderSpecificFood = async (req, res, next) => {
  try {
    const food = await FoodModel.findOne({ id: req.params.id });
    res.send(food);
  } catch (error) {
    res.status(500).send("Could not found the specific food");
  }
};

export const AddMenu = async (req, res, next) => {
  try {
    const newMenu = await FoodModel.create(req.body);
    res.send(newMenu);
  } catch (error) {
    res.status(500).send("Could not upload the new menu");
  }
};

export const UpdateMenu = async (req, res, next) => {
  try {
    const updatedMenu = await FoodModel.create({
      name: req.body.name,
      category: req.body.category,
      dishType: req.body.dishType,
      Price: req.body.Price,
      city: req.body.city,
      imageLink: req.body.imageLink,
    });
    res.send(updatedMenu);
  } catch (error) {
    res.status(500).send("Could not update the menu");
  }
};

export const DeleteAFoodFromMenu = async (req, res, next) => {
  try {
    const deletedMenu = await FoodModel.findOneAndDelete(req.params.id);
    res.send(deletedMenu);
  } catch (error) {
    res.status(500).send("Could not delete the menu");
  }
};

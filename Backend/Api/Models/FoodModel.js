import mongoose from "mongoose";
const { Schema, models } = mongoose;

// Food Schema
const FoodSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    dishType: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodModel = models.Food || mongoose.model("Food", FoodSchema);

export default FoodModel;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedProducts: JSON.parse(localStorage.getItem("SelectedProducts"))
    ? JSON.parse(localStorage.getItem("SelectedProducts"))
    : [],
};

export const counterSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const ProductWithQuantity = { ...action.payload, quantity: 1 };
      const ProductIndex = state.SelectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ProductIndex !== -1) {
        state.SelectedProducts[ProductIndex].quantity += 1;
      } else {
        state.SelectedProducts.push(ProductWithQuantity);
      }

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },
    IncreaseQuantity: (state, action) => {
      const increastedProduct = state.SelectedProducts.find(
        (item) => item.id === action.payload.id
      );

      increastedProduct.quantity += 1;

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },
    DecreaseQuantity: (state, action) => {
      const decreasedProduct = state.SelectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      decreasedProduct.quantity -= 1;

      if (decreasedProduct.quantity === 0) {
        const NewArray = state.SelectedProducts.filter(
          (item) => item.id !== action.payload.id
        );
        state.SelectedProducts = NewArray;
      }

      localStorage.setItem(
        "SelectedProducts",
        JSON.stringify(state.SelectedProducts)
      );
    },

  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, IncreaseQuantity, DecreaseQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;

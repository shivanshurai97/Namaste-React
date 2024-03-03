import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurant: {
      id: "",
      name: "",
      areaName: "",
      cloudinaryImageId: "",
    },
    items: [],
  },
  reducers: {
    // to set the restaurant from which food item is being added
    setRestaurant: (state, action) => {
      if (state?.restaurant.id) {
        if (action?.payload?.id !== state?.restaurant.id) {
          state.restaurant = action.payload;
          // clearing the cart items if user is trying to add food from another restaurant
          state.items.length = 0;
        }
      } else {
        state.restaurant = action.payload;
      }
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      let newState = [];
      const itemToRemove = action.payload;
      let isDeleted = false;
      for (let i = 0; i < state.items.length; i++) {
        if (state?.items[i]?.card.info.id === itemToRemove.card.info.id) {
          if (isDeleted) {
            newState.push(state.items[i]);
          } else {
            isDeleted = true;
          }
        } else {
          newState.push(state.items[i]);
        }
      }
      state.items = newState;
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, setRestaurant } =
  cartSlice.actions;

export default cartSlice.reducer;

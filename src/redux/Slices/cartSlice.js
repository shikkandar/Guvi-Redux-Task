import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increment(state, action) {
      const itemToIncrement = state.find((item) => item.id === action.payload);
      if (itemToIncrement) {
        itemToIncrement.itemCount += 1;
      }
    },
    decrement(state, action) {
      const itemToDecrement = state.find((item) => item.id === action.payload);
      if (itemToDecrement && itemToDecrement.itemCount > 1) {
        itemToDecrement.itemCount -= 1;
      }
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

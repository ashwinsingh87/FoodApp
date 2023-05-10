import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total:0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      return {
        ...state,

        items: state.items.filter((item, index) => item.name !== action.payload
        )
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    itemAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { itemAdded } = slice.actions;
export default slice.reducer;

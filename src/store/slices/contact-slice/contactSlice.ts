import { createSlice } from "@reduxjs/toolkit";
import { type Contact } from "../../../shared/types";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = contactSlice.actions;
export default contactSlice.reducer;

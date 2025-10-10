import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contact-slice/contactSlice";

export default configureStore({
  reducer: {
    contact: contactReducer,
  },
});

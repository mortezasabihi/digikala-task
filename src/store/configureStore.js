import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/modules/Cart/store";

export default function () {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
}

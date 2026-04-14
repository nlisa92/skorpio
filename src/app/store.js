import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import carsReducer from "./slices/carsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cars: carsReducer,
  },
});

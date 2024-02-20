import { configureStore } from "@reduxjs/toolkit";
import DataSlices from "./Slices/DataSlices";

export const Store = configureStore({
  reducer: {
    DataSlices: DataSlices,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import rmDetail from "./Features/RmDetailsSlice";

export const store = configureStore({
  reducer: {
    rm: rmDetail,
  },
});

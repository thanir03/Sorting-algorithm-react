import { configureStore } from "@reduxjs/toolkit";
import { algorithmReducer, algorithmStateType } from "./state";

const store = configureStore({
  reducer: {
    algorithm: algorithmReducer,
  },
});
export type StoreType = {
  algorithm: algorithmStateType;
};

export { store };

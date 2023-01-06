import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_ARRAY_SIZE } from "../utils/helper";

type arrayItemType = {
  num: number;
  isComparing: boolean;
};

type algorithmStateType = {
  array: arrayItemType[];
  size: number;
  selectedAlgorithm: string;
  isRunning: boolean;
  isAlgorithmSelected: boolean;
  isSorted: boolean;
};

const initialAlgorithmState: algorithmStateType = {
  array: [],
  size: DEFAULT_ARRAY_SIZE,
  selectedAlgorithm: "",
  isRunning: false,
  isAlgorithmSelected: false,
  isSorted: false,
};

const algorithmState = createSlice({
  name: "algorithm",
  initialState: initialAlgorithmState,
  reducers: {
    setArray(state, action: PayloadAction<arrayItemType[]>) {
      state.array = [...action.payload];
      state.size = action.payload.length;
      state.isSorted = false;
    },
    setAlgorithm(state, action: PayloadAction<string>) {
      state.selectedAlgorithm = action.payload;
      state.isAlgorithmSelected = true;
    },
    setArraySize(
      state,
      action: PayloadAction<{ array: arrayItemType[]; size: number }>
    ) {
      state.isSorted = false;
      state.array = action.payload.array;
      state.size = action.payload.size;
    },
    setStartAlgorithm(state) {
      state.isRunning = true;
      state.isSorted = false;
    },
    setEndAlgorithm(state) {
      state.isRunning = false;
      state.isAlgorithmSelected = false;
      state.selectedAlgorithm = "";
      state.isSorted = true;
    },
    setColor(state, action: PayloadAction<number[]>) {
      state.array = state.array.map((item: arrayItemType) => ({
        ...item,
        isComparing: false,
      }));
      action.payload.forEach((item) => {
        state.array[item].isComparing = true;
      });
    },
    swapValues(state, action: PayloadAction<number[]>) {
      const [index1, index2] = action.payload;
      [state.array[index1], state.array[index2]] = [
        state.array[index2],
        state.array[index1],
      ];
    },
    setValue(
      state,
      action: PayloadAction<{ index: number; value?: arrayItemType }>
    ) {
      const { index, value } = action.payload;
      if (value) {
        state.array[index] = value;
      }
    },
  },
});

const algorithmReducer = algorithmState.reducer;
const algorithmAction = algorithmState.actions;

export { algorithmReducer, algorithmAction };
export type { algorithmStateType, arrayItemType };

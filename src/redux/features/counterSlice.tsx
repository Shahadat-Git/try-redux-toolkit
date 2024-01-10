import { createSlice } from "@reduxjs/toolkit";

type TCount = {
  count: number;
};

const initialState: TCount = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, actions) => {
      state.count = state.count + actions.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, incrementByValue, decrement } = counterSlice.actions;
export default counterSlice.reducer;

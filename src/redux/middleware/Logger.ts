import { Middleware } from "@reduxjs/toolkit";

const Logger: Middleware = (state) => (next) => (action) => {
  console.log("Current State =>", state.getState().counterReducer);
  console.log(action);
  next(action);
  console.log("Next State =>", state.getState().counterReducer);
};

export default Logger;

import { configureStore } from "@reduxjs/toolkit";

import { gameReducer } from "./reducer/reducer";

const store = configureStore({
  reducer: gameReducer,
});

export default store;

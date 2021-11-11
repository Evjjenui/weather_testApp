import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./redux/weatherSearch";
import historyReducer from "./redux/searchHistory";

export default configureStore({
  reducer: {
    forecast: weatherReducer,
    history: historyReducer
  },
})

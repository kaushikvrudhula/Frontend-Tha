import { combineReducers } from "redux";
import placeReducer from "./PlaceReducer";
import placeDataReducer from "./PlaceDataReducer";
import themeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  placeData: placeDataReducer,
  theme: themeReducer,
});

export default rootReducer;
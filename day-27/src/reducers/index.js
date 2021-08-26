import todoReducer from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
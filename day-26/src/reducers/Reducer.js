import nameReducer from "./NameReducer";
import emailReducer from "./EmailReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    name: nameReducer,
    email: emailReducer,
});

export default rootReducer;
import rootReducer from "./reducers/Reducer";
import { createStore } from "redux";

const store = createStore(rootReducer);
export default store;
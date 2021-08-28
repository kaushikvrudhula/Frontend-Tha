import {combineReducers} from "redux";
import notesReducer from "./notesReducer"

const rootReducer = combineReducers ({
    counter:notesReducer
});

export type reducerType = ReturnType<typeof rootReducer>

export default rootReducer;
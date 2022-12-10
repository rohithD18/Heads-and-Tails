import { combineReducers } from "redux";
import dataReducer from "./DataReducer";

const rootReducer =combineReducers({
    dataReducer,
});

export default rootReducer;
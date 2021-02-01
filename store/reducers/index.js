import { combineReducers } from "redux";
import employeeReducer from "./employeeReducers";

const rootReducer = combineReducers({
	employee: employeeReducer,
});

export default rootReducer;

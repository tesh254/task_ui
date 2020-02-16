import { combineReducers } from "redux";
import loginReducer from "./login";
import taskReducer from "./tasks"

const rootReducer = combineReducers({
  login: loginReducer,
  task: taskReducer
});

export default rootReducer;

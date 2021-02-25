import { combineReducers } from "redux";
import cocktailsReducer from "./cocktailsReducer";
import commentsReducer from "./commentsReducer";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  comments: commentsReducer,
  users: usersReducer,
});

export default rootReducer;

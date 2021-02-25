import { combineReducers } from "redux";
import cocktailsReducer from "./cocktailsReducer";
import commentsReducer from "./commentsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  comments: commentsReducer,
  user: userReducer,
});

export default rootReducer;

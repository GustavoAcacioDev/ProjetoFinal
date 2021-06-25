import { combineReducers } from "redux";
import authReducer from './auth.reducer';
import problemReducer from "./problem.reducer";
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    problem : problemReducer
});

export default rootReducer;
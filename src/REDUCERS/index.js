import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import { reducer as formReducer } from "redux-form";
import streams from "../APIS/streams";
export default combineReducers({
    user: authReducer,
    form: formReducer,
    streams: streamReducer
})
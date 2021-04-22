import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer
})

let store = createStore(reducers);

export default store
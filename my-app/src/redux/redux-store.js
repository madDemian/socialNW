import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage:usersReducer
})

let store = createStore(reducers);

window.store = store

export default store
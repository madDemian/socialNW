import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path = '/messages' render = {() => <DialogsContainer /> }></Route>
                    <Route exact path = '/profile' render = {() => <Profile />}></Route>
                    <Route exact path = '/users' render = {() => <UsersContainer/> }></Route>
                </div>
            </div>
    );
}

export default App;

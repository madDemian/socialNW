import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path = '/messages' render = {() => <DialogsContainer store={props.store}/> }></Route>
                    <Route exact path = '/profile' render = {() => <Profile store={props.store}/>}></Route>
                </div>
            </div>
    );
}

export default App;

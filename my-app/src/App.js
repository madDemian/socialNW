import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";

function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path = '/messages' render = { () => <Dialogs state={props.state.dialogPage}/> }></Route>
                    <Route exact path = '/profile' render = {() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}></Route>
                </div>
            </div>
    );
}

export default App;

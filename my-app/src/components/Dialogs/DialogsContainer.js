import React from "react";
import {sendMessageActionCreator,onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return  <Dialogs MessageChange={onMessageChange}
                     SendMessage={onSendMessage}
                     newMessageText={state.dialogPage.newMessageText}
                     dialogs={state.dialogPage.dialogs} messages={state.dialogPage.messages}/>
}

export default DialogsContainer
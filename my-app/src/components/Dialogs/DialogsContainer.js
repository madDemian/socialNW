import React from "react";
import {sendMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText:state.dialogPage.newMessageText,
        dialogs:state.dialogPage.dialogs,
        messages:state.dialogPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        MessageChange:(text)=>{
            dispatch(onMessageChangeActionCreator(text))
        },
        SendMessage:()=>{
            dispatch(sendMessageActionCreator())
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
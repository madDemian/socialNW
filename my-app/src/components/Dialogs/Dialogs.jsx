import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Messages/Messages";



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d =><DialogsItems id={d.id} name={d.name}></DialogsItems> )
    let messagesElements = props.messages.map(t => <Message text={t.text}/>)


    let SendMessage = () => {
        props.SendMessage()
    }

    let MessageChange = (event) => {
        let text = event.target.value;
        props.MessageChange(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.textarea}>
                <textarea onChange={MessageChange} value={props.newMessageText}></textarea>
                <button onClick={SendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs
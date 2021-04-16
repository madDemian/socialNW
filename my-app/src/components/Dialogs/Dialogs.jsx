import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =><DialogsItems id={d.id} name={d.name}></DialogsItems> )
    let messagesElements = props.state.messages.map(t => <Message text={t.text}/>)

    let createMessage = React.createRef()

    let sendMessage = () => {

        let text = createMessage.current.value;
        alert(text)
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
                <textarea ref = {createMessage}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs
import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} className={classes.dialog}>{props.name}</NavLink>
        </div>
    )
}



export default DialogsItems
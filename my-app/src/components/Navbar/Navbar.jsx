import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to="/profile" className={classes.item} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" className={classes.item} activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div>
                <a href="/news" className={classes.item}>News</a>
            </div>
            <div>
                <a href="/music" className={classes.item}>Music</a>
            </div>
            <div>
                <a href="/settings" className={classes.item}>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar
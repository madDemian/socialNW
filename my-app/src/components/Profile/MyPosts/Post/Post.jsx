import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img
                src='https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztUoreaLQVp7OXJYzRD4si02tmIlaOkNemIxDwJv50jjuiQ94mjjVG3rhBpMGD2cIaSIwE6NQ7Z-wKggbC4nwIkFg8/360fx360f'></img>
            {props.content}

        <div><span>like {props.likesCount}</span></div>
        </div>
    );
}

export default Post
import React from "react";
import {addPostActionCreator,updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostText(text))
    }

    let onAddPost = () =>{
        props.store.dispatch(addPostActionCreator());
    }

    return <MyPosts PostChange={onPostChange}
                    AddPost={onAddPost}
                    newPostText={state.profilePage.newPostText}
                    posts={state.profilePage.posts}
    />
}

export default MyPostsContainer
import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post content = {p.text} likesCount = {p.likesCount}/>)

    let postChange = (event) => {
        let text = event.target.value
        props.PostChange(text)
    }

    let addPost = () =>{
        props.AddPost()
    }

    return(
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    Add new post
                    <textarea onChange={postChange} value={props.newPostText}></textarea>
                    <button onClick={addPost}>Add</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts
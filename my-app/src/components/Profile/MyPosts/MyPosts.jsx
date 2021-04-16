import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post content = {p.text} likesCount = {p.likesCount}/>)

    let createPost = React.createRef()

    let addPost = () =>{
        let text = createPost.current.value
        props.addPost(text);
        props.updateNewPostText('')
    }

    let onPostChange = () => {
        let text = createPost.current.value
        props.updateNewPostText(text)
    }

    return(
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    Add new post
                    <textarea onChange={onPostChange} ref={createPost} value={props.newPostText}></textarea>
                    <button onClick={addPost}>Add</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
    );
}

export default MyPosts
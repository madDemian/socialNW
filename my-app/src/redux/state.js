import {rerender} from "../render";


let state = {
    profilePage:{
        posts: [
            {
                id:1,
                text: 'here zdesya',
                likesCount: 12
            },
            {
                id:2,
                text: 'i tyt',
                likesCount: 165
            }
        ],
        newPostText: 'haha'
    },
    dialogPage:{
        dialogs: [
            {
                id: 1,
                name: 'Andrey'
            },
            {
                id: 2,
                name: 'Oksana'
            },
            {
                id: 3,
                name: 'Oleg'
            },
            {
                id:4,
                name: "Stepan"
            }
        ],
        messages: [
            {
                id: 1,
                text: 'Hello Vasya'
            },
            {
                id: 2,
                text: 'Zdarova Oleg'
            },
            {
                id: 3,
                text: 'Ya Grisha'
            }
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id:3,
        text: state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
    rerender(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerender(state)
}

export default state
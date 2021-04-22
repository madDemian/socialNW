const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =
    {
        posts: [
            {
                id: 1,
                text: 'here zdesya',
                likesCount: 12
            },
            {
                id: 2,
                text: 'i tyt',
                likesCount: 165
            }
        ],
        newPostText: ""
    }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export default profileReducer

export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


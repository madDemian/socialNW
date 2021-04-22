import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const store = {
    _callSubscriber() {
        console.log('No subscribers')
    },
    _state: {
        profilePage: {
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
        },
        dialogPage: {
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
                    id: 4,
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
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
            this._state.dialogPage = dialogReducer(this._state.dialogPage,action)
            this._state.profilePage = profileReducer(this._state.profilePage,action)
            this._callSubscriber(this._state)
        }
}


window.store = store
export default store
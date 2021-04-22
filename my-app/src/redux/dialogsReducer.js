const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

const dialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state
    }
}
export default dialogReducer

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})
const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcokZnuAVW2HGym40vpfY49ZPJTWEWaKICw&usqp=CAU',
            followed: true,
            fullName: 'Serega Naga',
            status: 'im okay',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 2,
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcokZnuAVW2HGym40vpfY49ZPJTWEWaKICw&usqp=CAU',
            followed: false,
            fullName: 'Valentin Strauss',
            status: 'im okay too',
            location: {city: 'Munich', country: 'Germany'}
        },
        {
            id: 3,
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcokZnuAVW2HGym40vpfY49ZPJTWEWaKICw&usqp=CAU',
            followed: true,
            fullName: 'Alexander Naga',
            status: 'im not okay',
            location: {city: 'Lisbon', country: 'Portuguese'}
        }
    ]

}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })

            }


        case UNFOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,users: [...state.users,...action.users]
            }
        default:
            return state
    }
}

export default usersReducer

export let followedAC = (userId) => ({type: FOLLOWED, userId})
export let unfollowedAC = (userId) => ({type: UNFOLLOWED, userId})
export let setUsersAC = (users) => ({type: SET_USERS, users})



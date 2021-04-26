import React from "react";
import Users from "./Users";
import {followedAC, setUsersAC, unfollowedAC} from "../../redux/usersReducer";
import {connect} from "react-redux";

let mapStateToProps=(state)=> {
    return{
        users:state.usersPage.users
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followedAC(userId))
        },
        unfollowed:(userId)=>{
            dispatch(unfollowedAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}


let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer
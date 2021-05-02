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
        unfollow:(userId)=>{
            dispatch(unfollowedAC(userId))
        },
        follow:(userId)=>{
            dispatch(followedAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}


export default  connect(mapStateToProps,mapDispatchToProps)(Users)

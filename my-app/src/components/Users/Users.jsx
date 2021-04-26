import React from "react";
import classes from './users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={classes.img}>
                        <img src={u.imgURL}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={()=>{props.follow(u.id)}}>Unfollow</button>
                            :<button onClick={()=>{props.unfollowed(u.id)}}>follow</button>
                        }
                    </div>
                </span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {u.location.city}
                    </div>
                    <div>
                        {u.location.country}
                    </div>
                </span>
            </div>
            )
            }
            </div>
     }
     export default Users
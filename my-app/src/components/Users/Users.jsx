import React from "react";
import classes from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
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
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={classes.img}>
                        <img src={u.imgURL}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            : <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
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
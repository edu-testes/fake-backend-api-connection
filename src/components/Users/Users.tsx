
import "./Users.css";
//import { useEffect } from "react";
import { UsersData } from "../../types/users/UsersData"

export default function Users(props: UsersData) {
  //console.log(props);
  //useEffect(() => {
  //}, [])
  return (
    <>
    { 
      props.users.map((user: UsersData) => {
        return (
          <div className="user-card" key={user.id}>
            <div className="avatar">
              <img src={user.avatarUrl} alt="avatar" />
            </div>
            <div className="user-details">
              <p className="user-details__name">{user.name}</p>
              <p className="user-details__descr">{user.description}</p>
            </div>
          </div>
        )
      })
    }
    </>
  )
}

/*

*/
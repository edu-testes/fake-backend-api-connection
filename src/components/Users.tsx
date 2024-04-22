
import "./User.css";
import { useEffect } from "react";

export default function Users(props) {
  useEffect(() => {
    console.log("Users");
  }, [])
  return (
   {
      props.users.map((user) => {
        return (
          <div className="user-card">
          <div className="avatar"></div>
          <div className="user-details">
            <p className="user-details__name">{props.name}</p>
            <p className="user-details__descr">{props.descr}</p>
          </div>
        </div>
        )
      })
    }
  )
}
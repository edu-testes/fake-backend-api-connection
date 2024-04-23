import { useState, useEffect } from "react";
import { getUsers } from "../services/getData"
import Users from "../components/Users/Users";

export default function UserPage() {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    getUsers().then((users) => setUsers(users)).catch((error) => console.log(error));
  }, [])
  return (
     <Users users={users} />
)
}


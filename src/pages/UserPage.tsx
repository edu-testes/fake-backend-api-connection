import { useState, useEffect } from "react";
import { getUsers } from "../services/getData"
import Users from "../components/Users/Users";
import Pagination from "../components/Pagination/Pagination";
import "./pages.css";

export default function UserPage() {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    getUsers().then((users) => setUsers(users)).catch((error) => console.log(error));
  }, [])
  return (
    <div className="pageContainer">
      <Users users={users} />
      <Pagination />
    </div>
)
}


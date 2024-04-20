import { Link } from "react-router-dom";
import { logout } from "../../services/authorization.ts";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="route-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="route-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="route-link">
            Register
          </Link>
        </li>
        <li>
          <Link to="/user" className="route-link">
            User
          </Link>
        </li>
        <li><a href="#" onClick={logout}>Logout</a></li>
      </ul>
    </nav>
  );
}

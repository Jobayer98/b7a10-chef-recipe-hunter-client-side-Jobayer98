import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import AuthContext from "../../context/authContext";
import "./Header.css";

const Header = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="sticky top-0 z-10">
      <div className="navbar bg-base-100 border-b-2 px-24 py-6">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Mexi Kitchen
          </Link>
        </div>
        <div className="mr-12">
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-none tooltip" data-tip={user?.displayName}>
          <div className="mr-2">
            {!loading && !user && <Link to="/login">Login</Link>}
          </div>
          {user && (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-36"
              >
                <li>
                  <a className="justify-between">Update Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

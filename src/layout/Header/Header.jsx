/* eslint-disable no-unused-vars */
import { updateProfile } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import AuthContext from "../../context/authContext";
import "./Header.css";
import { Toaster, toast } from "react-hot-toast";
import Hamburger from "./Hamburger";

const Header = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [isClick, setIsClick] = useState(false);
  const nameRef = useRef();
  const imgRef = useRef();

  const navigate = useNavigate();

  const handleUpdateUser = () => {
    const name = nameRef.current.value;
    const img = imgRef.current.value;

    updateProfile(user, {
      displayName: name,
      photoURL: img,
    })
      .then(() => {
        navigate("/");
      })
      .catch(() => {});

    toast.success("Update profile");
  };

  const handleClick = (e) => {
    e.stopPropagation();

    console.log(isClick);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="sticky top-0 z-10">
      <div className="navbar bg-base-100 border-b-2 md:px-10 lg:px-16 py-6">
        <div
          onClick={handleClick}
          className="block ml-4 bg-red-200 rounded-full"
        >
          <Hamburger />
        </div>
        <div className="flex-1 hidden md:block lg:block">
          <Link to="/" className="text-xl font-bold">
            Mex Kitchen
          </Link>
        </div>
        <div className="mr-12 hidden md:block lg:block">
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

        <div
          className="flex-none tooltip hidden md:block lg:block"
          data-tip={user?.displayName}
        >
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
                  <label htmlFor="my-modal-6" className="justify-between">
                    Update Profile
                  </label>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <label>
                    Name
                    <input
                      ref={nameRef}
                      className="input input-bordered input-primary mb-4 ml-2"
                      type="text"
                      defaultValue={user.displayName}
                    />
                  </label>
                  <br />
                  <label>
                    Photo url
                    <input
                      ref={imgRef}
                      className="input input-bordered input-primary ml-2"
                      type="url"
                      defaultValue={user.photoURL}
                    />
                  </label>
                  <div className="modal-action">
                    <button
                      onClick={handleUpdateUser}
                      htmlFor="my-modal-6"
                      className="btn"
                    >
                      Save
                    </button>
                    <label htmlFor="my-modal-6" className="btn">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </header>
  );
};

export default Header;

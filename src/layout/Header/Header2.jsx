import Menu from "./Menu";
import { updateProfile } from "firebase/auth";
import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/authContext";
import { Toaster, toast } from "react-hot-toast";

const Header2 = () => {
  const { user, logout, loading } = useContext(AuthContext);
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

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 md:hidden lg:hidden">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <Menu />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <h1>Mexican Kitchen</h1>
      </div>
      <div className="flex-none tooltip mr-4" data-tip={user?.displayName}>
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
            <div className="modal modal-middle sm:modal-middle">
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
                  Photo Url
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
      <Toaster />
    </div>
  );
};

export default Header2;

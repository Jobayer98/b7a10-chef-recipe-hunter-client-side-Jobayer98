import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";

import AuthContext from "../../context/authContext";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content w-[50%]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            {error && (
              <p className="text-xl font-semibold text-red-500">
                {" "}
                Failed Login. Invalid Email or Password
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 mb-0">
                <button className="btn btn-active btn-ghost ">Login</button>
              </div>
            </form>
            <div className="form-control ">
              <button className="btn bg-gray-50 hover:bg-gray-50 mb-2 text-gray-800">
                <FcGoogle className="mr-2 text-2xl" /> Login With Google
              </button>
              <button className="btn">
                {" "}
                <BsGithub className="mr-2 text-2xl" /> Login With Github
              </button>
            </div>
            <div className="mt-2 text-blue-700 hover:underline">
              <Link to="/signup">Create a new account. </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

const SignUpPage = () => {
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const { register } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conPass = form.conpassword.value;
    const photo = form.photo.value;

    const isEqual = password === conPass;

    if (!isEqual) {
      setError(true);
      setMsg("Registration Failed! Password did not match");
      return;
    }

    register(email, password)
      .then((result) => {
        result.user.displayName = name;
        result.user.photoURL = photo;
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(true);
        setMsg(e.message);
      });
  };
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content w-full md:w-[80%] lg:w-[50%]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <h1 className="mt-8 text-center text-2xl font-semibold">
            Please Registration
          </h1>
          <div className="card-body">
            {error && (
              <p className="text-xl font-semibold text-red-500"> {msg}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="username"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
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
                  name="password"
                  type="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="conpassword"
                  type="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  required
                  placeholder="https://example.com"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 mb-0">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <div className="mt-2  ">
              Already have an account?{" "}
              <Link className="text-blue-700 hover:underline" to="/login">
                Please Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

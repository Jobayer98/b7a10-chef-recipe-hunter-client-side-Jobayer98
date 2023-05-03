import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content w-[50%]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  type="password"
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

import { useContext } from "react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const{login} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        login(email,pass)
        .then(res =>{
          console.log("login successful", res.user);
          e.target.reset();
          navigate(location.state ? location.state : '/') 
        })
        .catch(err => console.log(err))

    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {/* <div>
                <h2>Does not have an account? <span><Link to="/register">Register</Link> </span></h2>
              </div> */}
              <SocialLogin></SocialLogin>

                </form>


           
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
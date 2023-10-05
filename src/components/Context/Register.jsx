import { useContext,Link } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";


const Register = () => {

    const {createUser} = useContext(AuthContext)

const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
  
    createUser(email,pass)
    .then(res=>console.log("register successfully",res.user))
    .catch(err=> console.log(err))
   
}









    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleRegister}>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
{/* 
              <div>
                <h2>Already have an account? <span><Link to="/login">Login</Link> </span></h2>
              </div> */}
                <SocialLogin />
                </form>
           
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;
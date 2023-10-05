import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {

  const {user,logOut} = useContext(AuthContext)

  const handlelogOut =() =>{
    logOut()
    .then(res => console.log(res.user))
    .catch(err => console.log(err))
  }
   
    const links = <>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/job"> Applied Jobs</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
    {
      user &&
      <>
       <li><NavLink to="/register">Profile</NavLink></li>
       <li><NavLink to="/register">Dashboard</NavLink></li>
      </>
    }
    </>



    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 color-[blue]">
                {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?  <div>
           <p>{user.email}</p>
           <img src={user.photoURL} className="rounded-full" alt="" />
           <button onClick ={handlelogOut} className="btn">Log out</button>
            </div>
      
            :
           <button className="btn"><Link to="/login">Login</Link></button> 
          }
        </div>
        {/* avater */}
       
        


      </div>
    );
};

export default Header;
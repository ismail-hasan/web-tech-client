import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const hendleOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="">
      <div className="navbar bg-black text-white px-[50px]">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" text-black font-semibold px-7 py-5 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-black"
            >
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/course">Courses</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </ul>
          </div>
          <Link to="/home" className="btn btn-ghost normal-case text-xl">
            Web Tech
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <NavLink className="text-lg mr-5" to="/home">
              Home
            </NavLink>
            <NavLink className="text-lg mr-5" to="/course">
              Courses
            </NavLink>
            <NavLink className="text-lg mr-5" to="/blog">
              Blog
            </NavLink>
            <NavLink className="text-lg mr-5" to="/blog">
              FAQ
            </NavLink>
          </ul>
          <div className="form-control ml-3">
            <label className="label cursor-pointer">
              <span className="label-text"></span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <NavLink to="/login">
              <button onClick={hendleOut} className="btn px-5 rounded mr-3">
                Log Out
              </button>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">
                <button className=" mr-3">Login </button>
              </NavLink>
              <NavLink to="register">
                <button className="capitalize ">Register </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

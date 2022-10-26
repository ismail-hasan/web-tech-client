import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { HiFastForward, HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [showNav, setShwoNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const hendleOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="bg-black text-white">
      <div className="md:flex justify-between items-center py-4 md:py-0 sticky top-0 z-20 px-[30px]">
        <div className="flex justify-between items-center">
          <Link to={"/home"}>
            <h1 className="text-3xl md:text-4xl capitalize">online learner</h1>
          </Link>
          <HiOutlineMenuAlt3
            onClick={() => setShwoNav(!showNav)}
            className="md:hidden block cursor-pointer text-4xl"
          ></HiOutlineMenuAlt3>
        </div>

        <nav
          className={
            (showNav ? "left-0" : "-left-full") +
            " fixed md:static mt-[60px] md:mt-[0px] flex flex-col md:flex-row md:w-auto -z-10 items-center bottom-0 top-0 space-y-7 md:space-y-0   bg-black w-[40%] p-5 md:bg-transparent transition-left"
          }
        >
          <NavLink className="mr-5 text-lg" to="/course">
            Course
          </NavLink>
          <NavLink className="mr-5 text-lg" to="/blog">
            Blog
          </NavLink>
          {user?.uid ? (
            <NavLink to="/login">
              <button onClick={hendleOut} className="btn bg-orange-500 py-[6px] px-5 rounded mr-3">
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
              {/* <NavLink>
                {user.photoURL ? (
                  <img className="rounded-lg" style={{ height: "30px" }} src={user.photoURL} alt="" />
                ) : (
                  <HiFastForward></HiFastForward>
                )}
              </NavLink> */}
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;

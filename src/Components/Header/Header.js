import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const hendleOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.log(e));
  };

  return (
    <div className="bg-black py-4 text-white px-[100px]">
      <div className="flex justify-between">
        <div>
          <Link to={"/home"}>
            <h1 className="text-4xl capitalize">online learner</h1>
          </Link>
        </div>

        <nav>
          <Link className="mr-5 text-lg" to="/course">
            Course
          </Link>
          <Link className="mr-5 text-lg" to="/blog">
            Blog
          </Link>
          <Link className="mr-5 text-lg" to="/login">
            Login
          </Link>
          <Link className="mr-5 text-lg" to="/register">
            register
          </Link>
        </nav>
        <div>
          {user?.uid ? (
            <Link to="/login">
              <button onClick={hendleOut} className="btn bg-orange-500 py-[6px] px-5 rounded mr-3">
                Log Out
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-orange-500 py-[6px] px-5 rounded mr-3">Login </button>
              </Link>
              <Link to="register">
                <button className="btn bg-orange-500 py-[6px] px-5 rounded">Register </button>
              </Link>
              {user?.email}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container flex flex-col text-center h-[100vh] justify-center text-white items-center">
        <p className="text-[22px] text-orange-600"> Best online learning platform</p>
        <h1 className="text-6xl">
          Start Learning from home with <br /> expert instructors
        </h1>
        <p className="text-xl mt-5">
          Read about the basics of web development,  the process of creating a website, <br /> and additional resources
          for those who want to learn more
        </p>
        <Link to="/course">
          <button className="capitalize text-white bg-orange-500 py-[6px] px-7 rounded mt-5 text-lg">
            Our Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

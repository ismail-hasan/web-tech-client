import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container flex flex-col text-center h-[91vh] justify-center text-white items-center">
        <p className="text-[22px] text-orange-600"> Best online learning platform</p>
        <h1 className="text-[30px] md:text-6xl w-[90%] md:w-[70] lg:[w-50]">
          Start Learning from home with expert instructors
        </h1>
        <p className="text-xl mt-5 px-[30px] md:px-[150px] lg:px-[250px]">
          Read about the basics of web development, the process of creating a website, and additional resources for
          those who want to learn more
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

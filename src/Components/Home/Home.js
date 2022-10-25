import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container flex flex-col text-center h-[100vh] justify-center text-white items-center">
        <p className="text-[22px] text-orange-600"> Best online learning platform</p>
        <h1 className="text-5xl">
          Start Learning from home with <br /> expert instructors
        </h1>
        <p className="text-2xl mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laboriosam aliquid <br /> illo reiciendis in
          quos esse quasi quo nesciunt rem?
        </p>
      </div>
    </div>
  );
};

export default Home;

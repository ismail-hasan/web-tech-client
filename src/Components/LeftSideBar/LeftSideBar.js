import React from "react";
import { Link } from "react-router-dom";

const LeftSideBar = ({ oneCourse }) => {
  const { name, id } = oneCourse;
 
  return (
    <div>
      <Link to={`${id}`}>
        <p className="text-lg py-3 font-semibold">{name}</p>
      </Link>
    </div>
  );
};

export default LeftSideBar;

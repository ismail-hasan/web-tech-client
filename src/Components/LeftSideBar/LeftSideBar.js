import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [couseList, setCouseList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courseList")
      .then((res) => res.json())
      .then((data) => setCouseList(data));
  }, []);
  return (
    <div>
      {couseList.map((list) => (
        <p>
          <Link>{list.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideBar;

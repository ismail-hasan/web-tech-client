import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const LeftSideBar = ({ oneCourse }) => {
  // const courseList = useLoaderData();
  const { name, id } = oneCourse;
  console.log(oneCourse);

  // const [couseList, setCouseList] = useState([]);
  // console.log(couseList);
  // useEffect(() => {
  //   fetch("http://localhost:5000/courseList")
  //     .then((res) => res.json())
  //     .then((data) => setCouseList(data));
  // }, []);
  return (
    <div>
      {/* {couseList.map((list) => (
        <p>
          <Link>{list.name}</Link>
        </p>
      ))} */}
      <Link to={`${id}`}>
        <p className="text-lg py-3 font-semibold">{name}</p>
      </Link>
    </div>
  );
};

export default LeftSideBar;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, img, dec } = course;
  return (
    <div>
      <div className="w-[50%] my-[100px] mx-auto">
        <img className="w-[60%]" src={img} alt="" />
        <h1 className="text-4xl py-4">{name}</h1>
        <p>{dec}</p>
        <Link to='/course'>
          <button className="capitalize text-white bg-orange-500 py-[6px] px-5 rounded mt-5">see more</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;

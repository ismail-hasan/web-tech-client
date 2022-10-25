import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, img, dec } = course;
  return (
    <div>
      <div className="w-[40%] my-[60px] mx-auto border-2 shadow-md border-[#e1e1e1]">
        <img className="rounded" src={img} alt="" />
        <div className="px-5">
          <h1 className="text-4xl py-4">{name}</h1>
          <p>{dec}</p>
          <Link to="/course">
            <button className="mb-10 capitalize text-white bg-orange-500 py-[6px] px-5 rounded mt-5">see more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

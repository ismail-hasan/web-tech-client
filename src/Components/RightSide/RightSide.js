import React from "react";
import { Link } from "react-router-dom";

const RightSide = ({ oneCourse }) => {
  const { name, dec, img, id } = oneCourse;
  return (
    <div className=" border border-[#ccc] rounded shadow-md px-3 py-4 bg-white">
      <img className="rounded w-full h-[230px] md:h-[250px]" src={img} alt="" />
      <h3 className="text-2xl md:text-3xl font-semibold mt-5">{name}</h3>
      <p className="text-lg mt-2">{dec.length > 200 ? dec.slice(0, 150) + "...." : dec}</p>
      <Link to={`${id}`}>
        <button className="capitalize text-white bg-orange-500 py-[6px] px-5 rounded text-lg mt-5">
          Course Details
        </button>
      </Link>
    </div>
  );
};

export default RightSide;

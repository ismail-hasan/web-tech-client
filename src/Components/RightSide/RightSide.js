import React from "react";
import { Link } from "react-router-dom";

const RightSide = ({ oneCourse }) => {
  const { name, dec, img, id } = oneCourse;
  return (
    <div className=" border border-[#ccc] shadow-md px-3 py-5 bg-white">
      <img className="rounded" src={img} alt="" />
      <h3 className="text-3xl mt-5">{name}</h3>
      <p className="text-lg mt-2">{dec}</p>
      <Link to={`${id}`}>
        <button className="capitalize text-white bg-orange-500 py-[6px] px-5 rounded mt-5">see more</button>
      </Link>
    </div>
  );
};

export default RightSide;

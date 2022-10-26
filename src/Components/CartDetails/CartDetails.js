import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CartDetails = () => {
  const courseList = useLoaderData();
  console.log(courseList);
  return (
    <div className="bg-[#eaeaea] h-screen flex justify-center items-center text-center">
      <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] mx-auto px-10 py-16 flex flex-col gap-6">
        <h1 className="text-2xl capitalize">thank your dear</h1>
        <h2 className="text-lg capitalize text-pink-500">
          you have successfully enrolled: <span className="text-[#1703f6] font-semibold">{courseList.name}</span> Course
        </h2>
        <Link to="/course">
          <button className="border border-orange-500 px-5 py-3 rounded-full w-2/4 mx-auto font-semibold text-xl">
            Back To Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;

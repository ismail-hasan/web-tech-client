import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckCart = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div className="bg-[#eaeaea] h-screen flex justify-center items-center text-center">
      <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] mx-auto px-5 py-10 flex flex-col gap-6">
        <h1 className="text-2xl capitalize">thank your dear</h1>
        <h2 className="text-lg capitalize text-pink-500">
          you have successfully enrolled
          <span>
           
          </span>
        </h2>
        <Link to="/course">
          <button className="border border-orange-500 px-5 py-3 rounded-full w-2/4 mx-auto font-semibold text-xl">
            Return Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckCart;

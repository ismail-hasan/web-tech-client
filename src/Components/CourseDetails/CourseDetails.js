import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name, img, rate, dec, authorDec, authorImg, authorName, review, courses } = course;
  return (
    <div>
      <div className="w-[85%] md:w-[60%] my-[60px] mx-auto border-2 shadow-md border-[#e1e1e1]">
        <img className="rounded" src={img} alt="" />
        <div className="px-5">
          <h1 className="text-[26px] md:text-4xl py-4 font-semibold leading-[50px]">Course Name - {name}</h1>
          <h3 className="text-[30px] pb-4">
            Price: <span className="font-semibold text-orange-600">{rate}</span>
          </h3>
          <p>{dec}</p>
          <h2 className="font-semibold text-3xl my-6">Author Information</h2>
          <div className="flex items-center">
            <img className="rounded-full h-24 w-24" src={authorImg} alt="" />
            <div className="pl-4">
              <h4 className=" text-orange-600 font-semibold text-2xl">{authorName}</h4>
              <p className="">{review}</p>
              <p className="font-semibold">{courses}</p>
            </div>
          </div>
          <p className="my-5">{authorDec}</p>
          <div className="flex justify-between">
            <Link to="/course">
              <button className="mb-10 capitalize text-white bg-orange-500 py-[6px] px-5 rounded mt-10 text-lg">
                Back To Courses
              </button>
            </Link>

            <Link to="/checkout">
              <button className="mb-10 capitalize text-white bg-orange-500 py-[6px] px-5 rounded mt-10 text-lg">
                Please Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

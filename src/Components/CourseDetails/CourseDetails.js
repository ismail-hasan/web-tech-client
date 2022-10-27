import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const [courseList, setCourseList] = useState([]);
  const ref = React.createRef();

  useEffect(() => {
    fetch("http://localhost:5000/courseList")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);

  const course = useLoaderData();
  const { id, name, img, rate, dec, authorDec, authorImg, authorName, review, courses } = course;
  return (
    <div ref={ref}>
      <div className="w-[85%] md:w-[60%] my-[60px] mx-auto border-2 shadow-md border-[#e1e1e1]">
        <img className="rounded w-full h-[450px]" src={img} alt="" />
        <div className="px-5">
          <h1 className="text-[26px] md:text-4xl py-4 font-semibold leading-[50px]">Course Name - {name}</h1>
          <h3 className="text-[30px] pb-4">
            Price: <span className="font-semibold text-orange-600">{rate}</span>
          </h3>
          <p>{dec}</p>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="border border-[#cfcfcf] py-2 px-3 mt-5 rounded-lg" onClick={toPdf}>
               Download Course Details
              </button>
            )}
          </Pdf>

          <h2 className="font-semibold text-3xl my-6">Author Information</h2>
          <div className="flex items-center">
            <img className="rounded-full h-24 w-24 object-cover" src={authorImg} alt="" />
            <div className="pl-4">
              <h4 className=" text-orange-600 font-semibold text-2xl">{authorName}</h4>
              <p className="">{review}</p>
              <p className="font-semibold">{courses}</p>
            </div>
          </div>
          <p className="my-5">{authorDec}</p>
          <div className="flex justify-between py-5">
            <Link to="/course">
              <button className=" btn btn-warning">Success</button>
            </Link>

            <Link to={`/courseList/${id}`}>
              <button className="btn btn-outline btn-accent hover:text-white">Get Primium Access</button>
            </Link>
            {/* {courseList.map((singleCourse) => (
              <CheckCart singleCourse={singleCourse} key={singleCourse.id}></CheckCart>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

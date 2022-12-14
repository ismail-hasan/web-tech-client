import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSide from "../RightSide/RightSide";

const Course = () => {
  const course = useLoaderData();

  return (
    <div>
      <div className=" md:grid-cols-12 grid bg-[#ebebeb]">
        <div className="md:flex-col col-span-2 px-10 md:py-20 ">
          {course.map((oneCourse) => (
            <LeftSideBar oneCourse={oneCourse} key={oneCourse.id}></LeftSideBar>
          ))}
        </div>
        <div className=" right-side col-span-10 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-16">
            {course.map((oneCourse) => (
              <RightSide oneCourse={oneCourse} key={oneCourse.id}></RightSide>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

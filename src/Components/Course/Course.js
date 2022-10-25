import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSide from "../RightSide/RightSide";

const Course = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <div className="grid grid-cols-12 bg-[#ebebeb]">
        <div className="col-span-2 border border-[#9bf500]">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className=" right-side col-span-10">
          <div className="grid grid-cols-3 gap-7 my-16">
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

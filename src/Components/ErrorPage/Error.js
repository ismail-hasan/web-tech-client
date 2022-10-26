import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-[#eaeaea] h-screen flex justify-center items-center text-center">
      <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] mx-auto px-5 py-10 flex flex-col gap-6">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-lg">Opps, This Page Is Not Found</p>
        <Link to="/">
          <button className="border border-orange-500 px-5 py-3 rounded-full w-2/4 mx-auto font-semibold text-xl">
            Return Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

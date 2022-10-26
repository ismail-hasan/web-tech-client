import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const Login = () => {
  const { signInWithPassword } = useContext(AuthContext);
  const nagivate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithPassword(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        form.reset();
        nagivate("/course");
        toast.success("User Login Sucess");
      })
      .catch((e) => {
        toast.error(e.message);
        console.log(e);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-orange-500 w-[80%] md:w-[50%] lg:w-[30%] md mx-auto mt-20 rounded px-10 py-10"
      >
        <h1 className="text-white capitalize text-[34px] text-center mb-2">Please login</h1>
        <div className="">
          <input
            name="email"
            placeholder="E-Mail"
            className="px-2 outline-none py-[6px] w-full rounded mt-4"
            type=" "
          />
          <input
            name="password"
            placeholder="Password"
            className="px-2 outline-none py-[6px] w-full rounded mt-4"
            type=" "
          />

          <button className="text-white text-lg rounded-sm bg-purple-700 px-6 py-2 mt-8">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

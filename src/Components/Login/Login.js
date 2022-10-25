import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="bg-orange-500 w-[30%] mx-auto my-20 rounded p-5">
        <h1 className="text-white capitalize text-3xl text-center txt-white mb-6">Please login</h1>
        <div className="">
          <input name="email" placeholder="E-Mail" className="px-2 outline-none py-1 w-full rounded mt-4" type=" " />
          <input
            name="password"
            placeholder="Password"
            className="px-2 outline-none py-1 w-full rounded mt-4"
            type=" "
          />

          <button className="text-white bg-purple-700 px-6 py-2 mt-8  right-0">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

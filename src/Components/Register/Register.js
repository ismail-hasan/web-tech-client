import React from "react";
import "./Register.css";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState(false);
  const { createUserWithPassword, updateUserProfile, googleSingIn, githubSingIn } = useContext(AuthContext);
  const nagivate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // const cPasaword = form.cPasaword.value;
    console.log(name, email, photo, password);

    createUserWithPassword(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        form.reset();
        nagivate("/course");
        handleUserProfile(name, photo);
        toast.success("user login success");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  const handleUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const handleGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e));
  };
  const handleGithub = () => {
    githubSingIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("github login successfull");
      })
      .catch((e) => {
        toast.error(e.message);
        console.log(e);
      });
  };

  return (
    <div className="bg-orange-500 w-[80%] md:w-[50%] lg:w-[35%] mx-auto my-10 rounded p-5">
      <form onSubmit={handleSubmit} action="">
        <h1 className="text-white capitalize text-[34px] text-center txt-white mb-6">Please register</h1>
        <div className="">
          <input name="name" placeholder="UserName" className="px-2 outline-none py-[6px] w-full rounded" type=" " />
          <input
            name="email"
            placeholder="E-Mail"
            required
            className="px-2 outline-none py-[7px] w-full rounded mt-6"
            type=" "
          />
          <input
            name="photo"
            placeholder="Photo URL"
            className="px-2 outline-none py-[7px] w-full rounded mt-6"
            type=" "
          />
          <input
            required
            name="password"
            placeholder="Password"
            className="px-2 outline-none py-[7px] w-full rounded mt-6"
            type="password"
          />

          <p className="lowercase text-[#000000] mt-3">
            already have an acouont
            <Link className="underline text-blue-800" to="/login">
              Please Login
            </Link>
          </p>

          <button className="text-white text-lg rounded-sm bg-purple-700 px-6 py-2 mt-8  right-0">Submit</button>
          <hr className="my-10" />
        </div>
      </form>
      <div className="">
        <button
          onClick={handleGoogle}
          className=" w-full rounded-md border border-white px-5 py-[6px] text-lg text-white capitalize"
        >
          google
        </button>
        <button
          onClick={handleGithub}
          className="w-full rounded-md mt-5 border border-white px-5 py-[6px] text-lg text-white capitalize"
        >
          github
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;

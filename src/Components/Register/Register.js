import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";

const Register = () => {
  const { createUserWithPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const cPasaword = form.cPasaword.value;
    console.log(name, email, photo, password, cPasaword);

    createUserWithPassword(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        form.reset();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="bg-orange-500 w-[30%] mx-auto my-20 rounded p-5">
        <h1 className="text-white capitalize text-3xl text-center txt-white mb-6">Please register</h1>
        <div className="">
          <input name="name" placeholder="UserName" className="px-2 outline-none py-1 w-full rounded" type=" " />
          <input name="email" placeholder="E-Mail" className="px-2 outline-none py-1 w-full rounded mt-4" type=" " />
          <input name="photo" placeholder="Photo URL" className="px-2 outline-none py-1 w-full rounded mt-4" type=" " />
          <input
            name="password"
            placeholder="Password"
            className="px-2 outline-none py-1 w-full rounded mt-4"
            type=" "
          />
          <input
            name="cPasaword"
            placeholder="Confirm Password"
            className="px-2 outline-none py-1 w-full rounded mt-4"
            type=" "
          />
          <button className="text-white bg-purple-700 px-6 py-2 mt-8  right-0">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

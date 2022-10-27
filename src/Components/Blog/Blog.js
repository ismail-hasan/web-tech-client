import React from "react";

const Blog = () => {
  return (
    <div className="w-[90%] md:w-[70%]  mx-auto">
      <h1 className="font-semibold text-4xl capitalize text-center py-6 pt-5">some questions</h1>
      <div>
        <h3 className="font-semibold py-3 text-2xl md:text-3xl ">
          1 .Why are you using firebase ? What other options do you have to implement authentication?
        </h3>
        <p className="text-lg">
          <span className="font-semibold"> ANS :</span> The Firebase Realtime Database lets you build rich,
          collaborative applications by allowing secure access to the database directly from client-side code. Data is
          persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
        <p className="pt-3">
          Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate
          can be through cards, retina scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div>
        <h3 className="font-semibold py-3 text-2xl md:text-3xl mt-2">2 .What is Node? How does Node work?</h3>
        <p className="text-lg">
          <span className="font-semibold"> ANS : </span>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript
          Engine and executes JavaScript code outside a web browser, which was designed to build scalable network
          applications.
        </p>
        <p className="pt-3">
          It is a used as backend service where javascript works on the server-side of the application. This way
          javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and data-intensive
        </p>
      </div>
      <div>
        <h3 className="font-semibold py-3 text-2xl md:text-3xl mt-2">3 .How does the private route work?</h3>
        <p className="text-lg">
          <span className="font-semibold"> ANS : </span>
          The private route component is similar to the public route, the only change is that redirect URL and
          authenticate condition. If the user is not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated (Logged in)
        </p>
      </div>
      <div>
        <h3 className="font-semibold py-3 text-2xl md:text-3xl mt-2 "> 4. What is cors?</h3>
        <p className="text-lg">
          <span className="font-semibold"> ANS : </span>
          CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with
          various options.
        </p>
      </div>
    </div>
  );
};

export default Blog;

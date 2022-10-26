import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import CheckCart from "./Components/CheckCart/CheckCart";
import Course from "./Components/Course/Course";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Error from "./Components/ErrorPage/Error";
import Home from "./Components/Home/Home";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/course", element: <Course></Course>, loader: () => fetch("http://localhost:5000/course") },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "/checkout", element: <CheckCart></CheckCart>, loader: () => fetch("http://localhost:5000/course") },
        {
          path: "/course/:id",
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
        },
        {
          path: "/course/:id",
          element: <LeftSideBar></LeftSideBar>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

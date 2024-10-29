import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <div>Page Not Found</div>,
    },

    {
      path: "/browse",
      element: <Browse />,
      errorElement: <div>Page Not Found</div>,
    },
  ]);

 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

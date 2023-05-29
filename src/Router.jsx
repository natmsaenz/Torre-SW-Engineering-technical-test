import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from "./Profile.jsx";
import "./index.css";

let router = createBrowserRouter([
  {
    path: "/profile/:username",
    element: <Profile />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
import React from "react";// eslint-disable-line no-unused-vars
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from "../components/profile/Profile.jsx";
import "../index.css";

let router = createBrowserRouter([
  {
    path: "/Torre-SW-Engineering-technical-test",
    element: <Profile />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
import React from "react";// eslint-disable-line no-unused-vars
import {
  BrowserRouter, // eslint-disable-line no-unused-vars
  RouterProvider, Router, Switch, Route // eslint-disable-line no-unused-vars
} from "react-router-dom";
import Profile from "../components/profile/Profile.jsx";
import "../index.css";

// let router = createBrowserRouter([
//   {
//     path: "/profile/:username",
//     element: <Profile />,
//   },
// ]);

export default function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/Torre-SW-Engineering-technical-test' exact component={Profile}/>
       </Switch>
     </Router>
    </div>
  );

  // return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

// if (import.meta.hot) {
//   import.meta.hot.dispose(() => router.dispose());
// }
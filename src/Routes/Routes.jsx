
import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Error from "../Pages/Error"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Component/Private/PrivateRoute";
import AddCraftItem from "../Pages/AddCraftItem";
import Home from './../Pages/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/AddCraftItem",
          element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
        },
        
    ]
    },
  ]);

  export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Error from "../Pages/Error"
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Component/Private/PrivateRoute";
import AddCraftItem from "../Pages/AddCraftItem";
import Home from './../Pages/Home';
import DetailsPage from "../Pages/DetailsPage";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import MyArtAndCarftList from "../Pages/MyArtAndCarftList";
import Update from "../Pages/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://server-side-teal.vercel.app/craftItems")
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
          path: "/update/:id",
          element: <Update></Update>,
          loader: () => fetch("https://server-side-teal.vercel.app/craftItems")
        },
        {
          path: "/AllArt&craftItems",
          element: <AllArtAndCraft></AllArtAndCraft>,
          loader: () => fetch("https://server-side-teal.vercel.app/craftItems")
        },
        {
          path: "/AddCraftItem",
          element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
        },
        {
          path: "/MyArt&CraftList",
          element: <PrivateRoute><MyArtAndCarftList></MyArtAndCarftList></PrivateRoute>,
          loader: () => fetch("https://server-side-teal.vercel.app/craftItems")
        },
        {
          path: "/craftDetails/:id",
          element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
          loader: () => fetch("https://server-side-teal.vercel.app/craftItems")
        },
        
    ]
    },
  ]);

  export default router;
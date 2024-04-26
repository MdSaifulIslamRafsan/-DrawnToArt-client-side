
import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Error from "../Pages/Error"
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        
    ]
    },
  ]);

  export default router;
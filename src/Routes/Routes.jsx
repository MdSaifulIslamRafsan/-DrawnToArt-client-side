
import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import Error from "../Pages/Error"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "contacts/:contactId",
          element: <div />,
        },
    ]
    },
  ]);

  export default router;
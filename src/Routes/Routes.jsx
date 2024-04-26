
import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "contacts/:contactId",
          element: <div />,
        },
    ]
    },
  ]);

  export default router;
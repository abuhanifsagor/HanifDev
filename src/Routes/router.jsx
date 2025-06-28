import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <h1>contact</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

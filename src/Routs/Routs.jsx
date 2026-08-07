import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Homelayout</h1>,
  },
  {
    path: "/Auth",
    element: <h1>Authentication</h1>,
  },
  {
    path: "/News",
    element: <h1>News</h1>,
  },
  {
    path: "/*",
    element: <h1>Error404</h1>,
  }
]);
export default router;
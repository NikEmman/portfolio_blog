import App from "./App";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      // {
      //   path: "/profile/:id",
      //   element: <Profile />,
      // },
    ],
  },
];

export default routes;

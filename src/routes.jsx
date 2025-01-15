import App from "./App";
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
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/profile/:id",
      //   element: <Profile />,
      // },
    ],
  },
];

export default routes;

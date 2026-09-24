import App from "./App";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Post from "./pages/Post";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <Post /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
];

export default routes;

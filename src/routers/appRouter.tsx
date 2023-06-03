import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import paths from "./path/paths";
import LazyLoginPage from "./path/LazyLoginPage";
import VideogamesPage from "../pages/VideogamesPage/VideogamesPage";

const routes: RouteObject[] = [
  {
    path: paths.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.homePage} replace />,
      },
      {
        path: paths.homePage,
        element: <VideogamesPage />,
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;

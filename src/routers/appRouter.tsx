import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import paths from "./path/paths";
import {
  LazyCreatePage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazyVideogamesPage,
} from "./path/LazyPages/LazyPagez";

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
        element: (
          <Suspense>
            <LazyVideogamesPage />
          </Suspense>
        ),
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.createPage,
        element: (
          <Suspense>
            <LazyCreatePage />
          </Suspense>
        ),
      },
      {
        path: paths.notFound,
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;

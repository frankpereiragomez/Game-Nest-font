import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { Suspense } from "react";
import paths from "./path/paths";
import {
  LazyLoginPage,
  LazyNotFoundPage,
  LazyVideogamesPage,
} from "./path/LazyPages/LazyPagez";
import CreatePage from "../pages/CreatePage/CreatePage";

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
        path: "/create-form",
        element: <CreatePage />,
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

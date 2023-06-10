import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../../pages/LoginPage/LoginPage.tsx")
);

export const LazyVideogamesPage = lazy(
  () => import("../../../pages/VideogamesPage/VideogamesPage.tsx")
);

export const LazyNotFoundPage = lazy(
  () => import("../../../pages/PageNotFound/PageNotFound.tsx")
);

export const LazyCreatePage = lazy(
  () => import("../../../pages/CreatePage/CreatePage.tsx")
);

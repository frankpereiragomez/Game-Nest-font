import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../../pages/LoginPage/LoginPage.tsx")
);

export const LazyVideogamesPage = lazy(
  () => import("../../../pages/VideogamesPage/VideogamesPage.tsx")
);

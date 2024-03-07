import React from "react";
import { RouterProvider } from "react-router-dom";
import { router, routerAuth } from "./";
export const HandleRoute = () => {
  return <RouterProvider router={router} />;
};
export const NavigateLogin = () => {
  return <RouterProvider router={routerAuth} />;
};

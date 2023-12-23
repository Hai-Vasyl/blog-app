import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, BlogPage, NotFoundPage } from "../../pages";
import { WrapperComponent } from "../wrapper";

export enum Routes {
  home = "/",
  blog = ":blogId",
}

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: (
      <WrapperComponent>
        <HomePage />
      </WrapperComponent>
    ),
    errorElement: (
      <WrapperComponent>
        <NotFoundPage />
      </WrapperComponent>
    ),
  },
  {
    path: Routes.blog,
    element: (
      <WrapperComponent>
        <BlogPage />
      </WrapperComponent>
    ),
  },
]);

export const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

import React from "react";
import { Redirect } from "react-router-dom";
import { DefaultLayout} from "./layouts"

export default [
    {
      path: "/",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/blog-overview" />
    }
  ];
  
import React from "react";
import { Redirect } from "react-router-dom";
import { DefaultLayout} from "./layouts";
import Login from "./components/login/Login";
import Organization from "./components/views/Organization";
import Employee from "./components/views/Employee";
import Department from "./components/views/Department";
import Addorganization from "./components/views/AddOrganization";


export default [
    {
      path: "/",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/login" />
    },
    {
      path: "/login",
      layout: DefaultLayout,
      component: Login
    },
    {
      path: "/organization",
      layout: DefaultLayout,
      component: Organization
    },
    {
      path: "/addorganization",
      layout: DefaultLayout,
      component: Addorganization
    },
    {
      path: "/employee",
      layout: DefaultLayout,
      component: Employee
    },
    {
      path: "/department",
      layout: DefaultLayout,
      component: Department
    }
  ];
  
import React from "react";
import { Navigate } from "react-router-dom";
import RouteWrapper from "../components/Common/routeWrapper";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";
import Dashboard from "../pages/Dashboard";

import UsersList from "../pages/Users/UsersList";

const authProtectedRoutes = [
  {
    path: "/dashboard",
    component: (
      <RouteWrapper>
        <Dashboard />
      </RouteWrapper>
    ),
  },
  {
    path: "/users",
    component: (
      <RouteWrapper>
        <UsersList />
      </RouteWrapper>
    ),
  },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  { path: "/lock-screen", component: <AuthLockScreen /> },
];

export { authProtectedRoutes, publicRoutes };

// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = () => (
  <>
    <Topbar />
    <Sidebar />
    <Outlet />
  </>
);

export default Layout;

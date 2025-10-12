import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer"; // Assuming your Footer component is in a file named Footer.jsx
import "./Layout.css";

const Layout = () => (
  <div className="layout-container">
    <Topbar />
    <Sidebar />
    <main className="main-content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
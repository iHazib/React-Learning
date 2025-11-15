import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
          <Header />
          <Outlet />  {/* for dynamic center of webpage*/}
          <Footer />
        </>
    )
}

export default Layout

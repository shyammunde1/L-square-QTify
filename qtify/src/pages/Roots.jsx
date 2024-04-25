import React from "react";
import Navbar from '../components/Navabars';
import { Outlet } from "react-router-dom";



function RootLayout() {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

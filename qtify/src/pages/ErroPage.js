import React from "react";

import Navbar from "../components/Navabars";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>An error occoured</h1>
        <p>could not find the page</p>
      </main>
    </>
  );
}

export default ErrorPage;

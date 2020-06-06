import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <p>
        This page is unprotected and can be viewed whether logged in or not.
      </p>
      <p>The Admin page requires a login to view.</p>
    </React.Fragment>
  );
}

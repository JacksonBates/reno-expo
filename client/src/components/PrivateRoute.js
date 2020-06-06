import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function PrivateRoute({ children, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route {...rest}>
      {authTokens ? (
        children
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { referer: { ...rest }.path } }}
        />
      )}
    </Route>
  );
}

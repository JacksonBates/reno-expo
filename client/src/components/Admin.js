import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { API } from "../helpers/api";

export default function Admin() {
  const { authTokens } = useAuth();

  const [data, setData] = useState([]);

  useEffect(() => {
    API({ endpoint: "/api/test/user" }, authTokens).then((response) =>
      setData(response)
    );
  }, [data]);

  return (
    <React.Fragment>
      <h1>Admin</h1>
      <p>You are successfully logged in.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </React.Fragment>
  );
}

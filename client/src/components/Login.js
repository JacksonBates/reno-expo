import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Login(props) {
  const history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const referer = history?.location?.state?.referer || "/";

  const postLogin = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    return fetch("http://localhost:8080/api/auth/signin", config)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.accessToken) {
          setAuthTokens(response.accessToken);
          setLoggedIn(true);
        } else {
          console.error(response.reason);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoggedIn) return <Redirect to={referer} />;

  return (
    <div>
      <form onSubmit={postLogin}>
        <label htmlFor="username">Username: </label>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <Link to="/signup">Don't have an account?</Link>
    </div>
  );
}

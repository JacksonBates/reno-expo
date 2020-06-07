import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postRegistration = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    return fetch("/api/auth/signup", config)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.message);
        } else if (response.status >= 400) {
          console.error(response.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={postRegistration}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
}

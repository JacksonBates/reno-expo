import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../helpers/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postRegistration = (e) => {
    e.preventDefault();
    register({ username, password }).then((response) => {
      if (response.status === 200) {
        console.log(response.message);
      } else if (response.status >= 400) {
        console.error(response.message);
      }
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

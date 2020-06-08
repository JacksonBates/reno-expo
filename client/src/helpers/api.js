export function API({ endpoint = "", method = "GET", data = {} }, authTokens) {
  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authTokens}`,
    },
  };
  return fetch(endpoint, config)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

export function login({ username = "", password = "" }) {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };

  return fetch("/api/auth/signin", config)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function register({ username = "", password = "" }) {
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
    .catch((error) => {
      console.error(error);
    });
}

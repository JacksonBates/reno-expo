export function API({ endpoint = "", method = "GET", data = {} }, authTokens) {
  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": authTokens,
    },
  };
  return fetch(endpoint, config)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}

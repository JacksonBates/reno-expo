const path = require("path");
const verifySignUp = require("./verifySignUp");
const authJwt = require("./verifyJwtToken");

module.exports = function (app) {
  const controller = require("../controller/controller.js");

  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUserNameOrEmail],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userContent);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
};

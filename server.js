var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/router/router.js")(app);

// Create a Server
var server = app.listen(8080, function () {
  var port = server.address().port;

  console.log(`App listening on port ${port}`);
});

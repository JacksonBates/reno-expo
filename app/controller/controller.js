require("dotenv").config();
const db = require("../../models/index");
const User = db.User;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      res
        .status(200)
        .json({ status: 200, message: "User registered successfully!" });
    })
    .catch((err) => {
      res.status(400).json({ status: 400, message: "Error -> " + err });
    });
};

exports.signin = (req, res) => {
  console.log("Sign-In");

  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Username or Password invalid",
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Username or Password invalid",
        });
      }

      var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400, // expires in 24 hours
      });

      res.status(200).json({ auth: true, accessToken: token });
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.userContent = (req, res) => {
  User.findOne({
    where: { id: req.userId },
    attributes: ["username"],
  })
    .then((user) => {
      res.status(200).json({
        description: "User Content Page",
        user: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        description: "Can not access User Page",
        error: err,
      });
    });
};

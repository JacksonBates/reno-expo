const db = require("../../models/index");
const User = db.User;

checkDuplicateUserNameOrEmail = (req, res, next) => {
  // -> Check Username is already in use
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res
        .status(400)
        .json({ status: 400, message: "Username is already taken!" });
      return;
    }
    next();
  });
};

const signUpVerify = {};
signUpVerify.checkDuplicateUserNameOrEmail = checkDuplicateUserNameOrEmail;

module.exports = signUpVerify;

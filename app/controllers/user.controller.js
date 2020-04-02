const { User } = require("../models");

exports.addUser = (req, res) => {
  log(req.body);
  // Create a new user
  const user = new User({
    userName: req.body.userName,
    password: req.body.password
  });
  // Save the user
  user.save().then(
    user => {
      res.send(user);
    },
    error => {
      res.status(400).send(error); // 400 for bad request
    }
  );
}

// import the mongoose models
const { User } = require("../models");
exports.loginSession = (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  console.log(userName, password);
  // Use the static method on the User model to find a user
  // by their userName and password
  User.findByUserNamePassword(userName, password)
    .then(user => {
      // Add the user's id to the session cookie.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user._id;
      req.session.userName = user.userName;
      res.send({ currentUser: user.userName });
    })
    .catch(error => {
      res.status(400).send("The username or password is incorrect");
    });
};

// A route to logout a user
exports.logoutSession = (req, res) => {
  // Remove the session
  req.session.destroy(error => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send("You have been successfully logged out");
    }
  });
};

// A route to check if a user is logged in on the session cookie
exports.checkSession = (req, res) => {
  if (req.session.user) {
    console.log({ currentUser: req.session.userName });
    res.send({ currentUser: req.session.userName });
  } else {
    res.status(401).send();
  }
};

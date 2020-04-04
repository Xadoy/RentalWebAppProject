const { User } = require("../models");

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user || user.isRemoved) {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((error) => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const isAdmin = [
  authenticate,
  (req, res, next) => {
    User.findById(req.user)
      .then((user) => {
        if (!user || !user.isAdmin) {
          return Promise.reject();
        } else {
          next();
        }
      })
      .catch((error) => {
        res.status(403).send({ message: "Require Admin Access!" });
      });
  },
];
module.exports = {
  authenticate,
  isAdmin,
};

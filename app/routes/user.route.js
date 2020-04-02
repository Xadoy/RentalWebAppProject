// import the mongoose models
const { User } = require("../models");

module.exports = function(app) {
  // Set up a POST route to *create* a user of your web app.
  app.post("/api/users", (req, res) => {
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
  });
};

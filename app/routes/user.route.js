const controller = require("../controllers/user.controller");

module.exports = function(app) {
  // Set up a POST route to *create* a user of your web app.
  app.post("/api/users", controller.addUser);

  // get user information
  // app.get("/api/users/:uid", controller.getUser);


  // admin only
  // delete a user

  // get all users
  // app.get("/api/users", controller.getUsers);
};

const controller = require("../controllers/user.controller");

module.exports = function(app) {
  // Set up a POST route to *create* a user of your web app.
  app.post("/api/users", controller.addUser);
};

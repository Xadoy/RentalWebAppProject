// import the mongoose models
const controller = require("../controllers/session.controller");

module.exports = function(app) {
  // A route to login and create a session
  app.post("/session/login", controller.loginSession);

  // A route to logout a user
  app.get("/session/logout", controller.logoutSession);

  // A route to check if a user is logged in on the session cookie
  app.get("/session/check-session", controller.checkSession);
};

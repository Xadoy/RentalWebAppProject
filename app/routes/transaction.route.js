const controller = require("../controllers/transaction.controller");
const { auth } = require("../middlewares");

module.exports = function(app) {
  // Set up a POST route to *create* a user of your web app.
  app.post("/api/transactions", auth.authenticate, controller.addTransaction);
};

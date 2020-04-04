const controller = require("../controllers/transaction.controller");

module.exports = function(app) {
  // Set up a POST route to *create* a user of your web app.
  app.post("/api/transactions", controller.addTransaction);
};

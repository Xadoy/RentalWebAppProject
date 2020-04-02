// import the mongoose models
const controller = require("../controllers/item.controller");

module.exports = function(app) {
  // a GET route to get all items
  app.get("/api/items", controller.getAllValidItems);
  app.post("/api/items", controller.addItem);
  app.delete("/api/items/:id", controller.delItem);
};

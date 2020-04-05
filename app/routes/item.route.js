const controller = require("../controllers/item.controller");
const { auth } = require("../middlewares");

module.exports = function (app) {
  // a GET route to get all items
  app.get("/api/items", controller.getAllValidItems);

  app.get("/api/items/:id", controller.getItem);

  app.post("/api/items", controller.addItem);
  app.delete("/api/items/:id", controller.delItem);

  app.get("/api/items/search/:keyword", controller.getAllValidItemsWithKeyword);

  // comments
  app.get("/api/items/:id/comments", controller.getCommentsOfItem);
  app.post(
    "/api/items/:id/comments",
    auth.authenticate,
    controller.addCommentToItem
  );
};

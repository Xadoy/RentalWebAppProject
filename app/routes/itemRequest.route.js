const controller = require("../controllers/itemRequest.controller");
const { auth } = require("../middlewares");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

module.exports = function (app) {
  // a GET route to get all items
  app.get("/api/item_requests", auth.isAdmin, controller.getAllItemRequests);

  app.post(
    "/api/item_requests/images",
    [auth.authenticate, multipartMiddleware],
    controller.addItemRequestImage
  );
  app.post("/api/item_requests", auth.authenticate, controller.addItemRequest);
  app.delete("/api/item_requests/:id", auth.isAdmin, controller.delItemRequest);
};

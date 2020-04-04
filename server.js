/* server.js for team 45 */
"use strict";
const log = console.log;
const express = require("express");
const config = require("./app/config");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

const db = require("./app/models");

// import the mongoose models
const { User } = require("./app/models");

// starting the express server
const app = express();

// check if node is running on production env
const env = process.env.NODE_ENV || "dev";
// redirect to https if runing on production env
if (env === "production") {
  app.use(function(request, response, next) {
    if (!request.secure && request.get("x-forwarded-proto") !== "https") {
      return response.redirect("https://" + request.get("host") + request.url);
    }
    next();
  });
}

// enable cors
app.use(cors());

// body-parser: middleware for parsing HTTP JSON body into a usable object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a session cookie
app.use(
  session({
    secret: "oursecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60000,
      httpOnly: true
    }
  })
);

// mongoose and mongo connection
db.mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    setupDB();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// routes
// Session handling
require("./app/routes/session.route")(app);

// User routes
require("./app/routes/user.route")(app);
// Item resource route
require("./app/routes/item.route")(app);
// Transaction resource route
require("./app/routes/transaction.route")(app);

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});

// setup the db for first time running
const setupDB = () => {
  log("Setting up database");
  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new User({
        userName: config.adminName,
        password: config.adminPassword,
        isAdmin: true
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added admin account with default username and password");
      });
    }
  });
};

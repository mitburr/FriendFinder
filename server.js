// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friend")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// Create New Characters - takes in JSON input
app.post("/api/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservationRequest = req.body;

  // Using a RegEx Pattern to remove spaces from newReservationRequest
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservationRequest.routeName = newReservationRequest.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservationRequest);

  tables.push(newReservationRequest);

  res.json(newReservationRequest);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.set('PORT', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Restaurant Tables (DATA)
// =============================================================
var tables = [];
var waitingList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
app.get("/reservation.js", function(req, res) {
    res.sendFile(path.join(__dirname, "js/reservation.js"));
});
app.get("/tables.js", function(req, res) {
    res.sendFile(path.join(__dirname, "js/tables.js"));
});
// Search for tables - provides JSON
app.get("/api/:tables?", function(req, res) {
    var chosen = req.params.tables;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < tables.length; i++) {
            if (chosen === tables[i].routeName) {
                res.json(tables[i]);
                return;
            }
        }

        res.json(false);
    } else {
        res.json(tables);
    }
});

// Search for waiting list - provides JSON
app.get("/api/:waitingList?", function(req, res) {
    var chosen = req.params.waitingList;

    if (chosen) {
        console.log(chosen);

        for (var i = 0; i < waitingList.length; i++) {
            if (chosen === waitingList[i].routeName) {
                res.json(waitingList[i]);
                return;
            }
        }

        res.json(false);
    } else {
        res.json(waitingList);
    }
});

// Create New Tables - takes in JSON input
app.post("/api/newReservation", function(req, res) {
    if (tables.length <= 5) {
        // req.body hosts is equal to the JSON post sent from the user
        var newTable = req.body;

        console.log(newTable);

        // We then add the json the user sent to the tables array
        tables.push(newTable);

        // We then display the JSON to the users
        res.json(newTable);
    } else {
        // req.body hosts is equal to the JSON post sent from the user
        var newWaiting = req.body;

        console.log(newWaiting);

        // We then add the json the user sent to the tables array
        waitingList.push(newWaiting);

        // We then display the JSON to the users
        res.json(newWaiting);
    }

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

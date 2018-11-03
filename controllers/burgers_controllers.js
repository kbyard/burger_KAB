var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function(req, res) {
    console.log("POST");
    burger.create(
        [
            "burger_name", "burger_description", "devoured"
        ],
        [
            req.body.burger_name, '', 0
        ],
        function() {
            res.redirect("/");
        }
    );
});

router.put("/burgers/:id", function(req, res) {

    var condition = "id = " + req.body.burger_id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: 1
        },
        condition,
        function() {
            res.redirect("/");
        }
    );
});

module.exports = router;
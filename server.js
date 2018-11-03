var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var routes = require("./controllers/burgers_controllers.js");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
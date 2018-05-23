var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "hbs");

app.get('/', function(req, res) {
    res.send("Home Page!");
});

app.listen(3000, function() {
    console.log("Server started...");
});
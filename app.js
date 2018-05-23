var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var hbs         = require("hbs");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function(req, res) {
    res.render("landing");
});

app.get('/drumsets', function(req, res) {
    res.render("drumsets");
});

app.listen(3000, function() {
    console.log("Server started...");
});
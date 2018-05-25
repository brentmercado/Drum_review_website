var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var hbs         = require("hbs");
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/drum_review");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

// SCHEMA SETUP
var drumsetSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
var Drumset = mongoose.model("Drumset", drumsetSchema);

app.get('/', function(req, res) {
    res.render("landing");
});

// INDEX - show all drumsets
app.get('/drumsets', function(req, res) {
    // Get all drumsets from DB
    Drumset.find({}, function(err, allDrumsets) {
        if (err) {
            console.log(err);
        } else {
            res.render("drumsets", {drumsets: allDrumsets})
        }
    });
});

// CREATE - add new drumset to DB
app.post('/drumsets', function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newDrumset = {name: name, image: image, description: description};

    // Create a new drumset and save to DB
    Drumset.create(newDrumset, function(err, newDrumset) {
        if (err) {
            console.log(err);
            
        } else {
            res.redirect("/drumsets");
        }
    });
});

app.get("/drumsets/new", function(req, res) {
    res.render("new");
});

app.listen(3000, function() {
    console.log("Server started...");
});
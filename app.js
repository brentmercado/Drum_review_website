var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var hbs         = require("hbs");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

var drumsets = [
    {name: "Pearl Export EXL 7-piece", image: "https://media.sweetwater.com/images/items/750/EXL727S-C255-large.jpg?v=beb9513f42a2f518"},
    {name: "Ludwig Accent Combo 5-piece", image: "https://media.guitarcenter.com/is/image/MMGS7/Accent-Combo-5-piece-Drum-Set-Wine/666618000025000-00-500x500.jpg"},
    {name: "Tama Imperialstar 5-piece", image: "https://media.sweetwater.com/api/i/q-82__ha-d5a5bbdea9e687b0__hmac-10ef2f9adbc72a6e32c14c4ba8df575d1e82d8b2/images/items/750/IP52NBCBOB-large.jpg"}
];

app.get('/', function(req, res) {
    res.render("landing");
});

app.get('/drumsets', function(req, res) {
    res.render("drumsets", {drumsets: drumsets});
});

app.listen(3000, function() {
    console.log("Server started...");
});
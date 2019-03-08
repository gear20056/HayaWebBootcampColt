var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var campgrounds = [
        {name: "Salmon Creek", image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/64/9d/47/salmon-creek-falls-trail.jpg"},
        {name: "Granite Hill", image: "https://media-cdn.tripadvisor.com/media/photo-s/02/2b/3e/05/granite-hill-camping.jpg"},
        {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Daycamp.jpg"},
        {name: "Salmon Creek", image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/64/9d/47/salmon-creek-falls-trail.jpg"},
        {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Daycamp.jpg"},
        {name: "Salmon Creek", image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/64/9d/47/salmon-creek-falls-trail.jpg"},
        {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Daycamp.jpg"}
];


app.get("/", function(req, res){
    res.render("landing");
    // res.send("this will be the landing page soon!");
});

app.get("/campgrounds", function(req, res){

    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // res.send("YOU HIT THE POST ROUTE!")
    
    
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image}
   campgrounds.push(newCampground);
   // redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});
var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

// My Style
/*
app.get("/speak/:subanimal", function(req, res){
    var animal = req.params.subanimal;
    var sound;
    if(animal === "pig"){
       sound = "Oink";
    } else if(animal === "cow"){
        sound = "Moo";
    } else if(animal === "dog"){
        sound = "Woof Woof!";
    } else if(animal === "cat"){
        sound = "Meow!";
    } else if(animal === "seal"){
        sound = "Bark~~~";
    }
    res.send("The " + animal + " says " +"\'" +sound + "\'"); 
});
*/

// Colt Sol. Easy way
app.get("/speak/:subanimal", function(req, res){
    var animal = req.params.subanimal.toLowerCase(); //Fix bug if user use upper case it force to lower case
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meow!",
        seal: "Bark~~~"
    };
    // Use JS Object
    var sound = sounds[animal];
    res.send("The " + animal + " says " +"\'" +sound + "\'"); 
});
// ==============================

app.get("/repeat/:keyword/:looptimes/", function(req, res){
    var word = req.params.keyword;
    var Looptimes = Number(req.params.looptimes); // Add JS "Number" method
    var display = "";
    for(var i=0; i<Looptimes; i++){
        display += word + " ";
    }
    res.send(display);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started!");
});

// Version 01

// var answer = prompt("are we there yet?");


// while(answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("are we there yet?");
// }

// alert("Yay, We made it!");


// Version 00
// if(answer === "yes"){
//     alert("Yay, We made it!");
// } else {
//     var answer = prompt("are we there yet?");
// }

// Version 02

var answer = prompt("are we there yet?");


while(answer.indexOf("yes") === -1){
    var answer = prompt("are we there yet?");
}

alert("Yay, We made it!");
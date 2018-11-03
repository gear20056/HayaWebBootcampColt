var targetNumber =25;
var inputNumber = prompt("Enter your guess number!");   //It default input with string you need convert string --> int

if(Number(inputNumber) < targetNumber){
    alert("Your Guessing Number is too Low");
}
else if(Number(inputNumber) === targetNumber){
    alert("Your Guessing Number is correct!");
}
else if(Number(inputNumber) > targetNumber){
    alert("Your Guessing Number is too High");
}
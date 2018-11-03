var age = prompt("How old are you? : ");

if(age < 0){
    alert("Error you input wrong answer!");
} else if(age === 21){
    alert("happy 21st birthday!!");
} else if(age % 2 === 1){
    alert("your age is odd");
} else if(age / age === 1){
    alert("your age is perfect square");
}
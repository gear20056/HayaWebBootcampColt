var age = prompt("How old are you? : ");

if(age < 0){
    alert("Error you input wrong answer!");
} 

if(age === 21){
    alert("happy 21st birthday!!");
}

if(age % 2 !== 0){
    alert("your age is odd");
}

if(age % Math.sqrt(age) === 0){
    alert("your age is perfect square");
}
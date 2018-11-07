// Exeserise 1
console.log("Print numbers between -10 and 19");
var num = -10;

while(num >= -10 && num <20){
    console.log(num);
    num += 1;
}

console.log("==============================");
// Exeserise 2
console.log("Print even numbers between 10 and 40");
num = 10;
while(num > 9 && num <= 40){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}

console.log("==============================");
// Exeserise 3
console.log("Print odd numbers between 300 and 333");
num = 300;
while(num >= 300 && num <= 333){
    if(num % 2 !== 0){
        console.log(num);
    }
    num++;
}

console.log("==============================");
// Exeserise 4
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
num = 5;
while(num > 4 && num < 51){
    if(num % 3 === 0 && num % 5 === 0){
        console.log(num);
    }
    num++;
}

console.log("==============================");
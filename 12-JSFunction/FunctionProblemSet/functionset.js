function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function factorial(num){
    var temp=0;
    var Totalfactorial=1;
    while(num>0){
        if(num === 0){
            return 1;
        }
        else{
            Totalfactorial += TotalFactorial * num;
        }
        num--;
    }
    return Totalfactorial; 
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("---------------------");

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));


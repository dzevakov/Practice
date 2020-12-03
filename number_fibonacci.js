'use strict';

function numberFibonacci(n) {
    let number = 1;
    let prevNumber = 0;
    let tempNumber = 0;
    let i = 2;
    while(n >= i) {
        tempNumber = number;
        number = number + prevNumber;
        prevNumber = tempNumber;
        i++;
    }

    return number;
}

console.log(numberFibonacci(12));
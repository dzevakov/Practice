'use strict';

function greatestCommonDevisor(a, b) {
    let divisor = 2;
    let greatestDivisor = 1;

    if(a < divisor || b < divisor) {
        return 1;
    }

    while(a > divisor && b> divisor) {
        if((a % divisor === 0) && (b % divisor === 0)) {
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}

console.log(greatestCommonDevisor(75, 165));
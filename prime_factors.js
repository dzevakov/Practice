'use strict';

function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    if(divisor < 3){
        if(n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
            divisor++;
        }
    } 
    divisor++;
    while(n >= divisor) {
        if(n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } 
        divisor += 2;
    }
    return factors;
}

console.log(primeFactors(69));

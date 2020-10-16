"use strict";

function toBinary(num) {
    function calculationProcess(number) {
        let remainder;
        let result = [];

        for(let i = 0; number > 0; i++) {
            remainder = (number / 2) - Math.trunc(number / 2);
            number = Math.floor(number / 2);

            if(remainder > 0) {
                result.push(1);
            } else if(remainder === 0){
                result.push(0);
            }
        }
        
        return result;
    }
    
    if(num === 0) {
        return '0';
    } else if(Math.sign(num) === -1) {
        num = Math.abs(num);
        const res = calculationProcess(num);
        res.push('-');
        return res.reverse().join('');
    } else {
        return calculationProcess(num).reverse().join('');
    }
    
}

function toDecimal(num) {
    if(num === 0) {
        return 0;
    }
    const splitNum = num.split('').reverse();
    if(splitNum[splitNum.length - 1] !== '-') {
        let result = 0;
        for(let i = 0; i < splitNum.length; i++) {
            if (+splitNum[i] > 0) {
                result = result + Math.pow(2, i);
            }
        }
        return result;
    } else if(splitNum[splitNum.length - 1] === '-') {
        let result = 0;
        for(let i = 0; i < splitNum.length; i++) {
            if (+splitNum[i] > 0) {
                result = result + Math.pow(2, i);
            }
        }
        return (result * -1);
    }

}

console.log(toDecimal(toBinary(136)));
console.log(toDecimal(toBinary(-654132654)));
console.log(toDecimal(toBinary(136654)));
console.log(toDecimal(toBinary(-16)));
console.log(toDecimal(toBinary(0)));


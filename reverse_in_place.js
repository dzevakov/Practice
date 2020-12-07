'use strict';

function reverseInPlace(str) {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(reverseInPlace("I ma eht doog yob"));
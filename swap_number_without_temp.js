'use strict';

function swap(a, b) {
    console.log(`Before a: ${a}, b: ${b}.`);

    b = b - a;
    a = a + b;
    b = a - b;

    console.log(`After a: ${a}, b: ${b}.`);
}

swap(6, 15);
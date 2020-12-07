'use strict';

function merge(arr1, arr2) {
    const mergedArray = [];

    while (arr1[0] && arr2[0]) {
        if(arr1[0] < arr2[0]) {
            mergedArray.push(arr1[0]);
            arr1.splice(0, 1);
        } else if(arr1[0] === arr2[0]) {
            mergedArray.push(arr1[0]);
            arr1.splice(0, 1);        
        } else {
            mergedArray.push(arr2[0]);
            arr2.splice(0, 1);
        }
    }

    return mergedArray.concat(arr1.concat(arr2));
}

console.log(merge([1, 2, 5, 7, 9, 10], [2, 2, 3, 4, 6, 8]));
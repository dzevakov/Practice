'use strict';


// function removeDuplicate(arr) {
//     var exists ={ },
//         outArr = [], 
//         elm;
  
//     for(var i = 0; i < arr.length; i++) {
//         elm = arr[i];
//         if(!exists[elm]) {
//             outArr.push(elm);
//             exists[elm] = true;
//         }
//     }
//     return outArr;
// }
  
  function removeDuplicate(arr) {
    const clearArray = [];

    arr.forEach((element) => {
        if(clearArray.includes(element) === false) {
            clearArray.push(element);
        }
    });
    return clearArray;
  }

  console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));
//   = [1, 3, 5, 6, 7, 8]
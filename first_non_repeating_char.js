'use strict';

function searchChar(str) {
    const searched = [];
    const repeatingChar = {};
    const strLength = str.length;

    for(let i = 0; i < strLength; i++) {
        if(!repeatingChar[str.charAt(i)]) {
            repeatingChar[str.charAt(i)] = 1;
            searched.push(str.charAt(i));
        } else {
            repeatingChar[str.charAt(i)] += 1;
        }
    }
    for(let item of searched) {
        if(repeatingChar[item] === 1) {
            return item;
        }
    }
}

console.log(searchChar('the quick brown fox jumps then quickly blow air'));
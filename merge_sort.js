const sort = (a, b) => {
    let i = 0,
        j = 0,
        comparedValue = b[i],
        buffer = a[i],
        comparedArray = 'a';
    const result = [];

    while(buffer && comparedValue !== undefined) {
        if(buffer > comparedValue) {
            result.push(comparedValue);
            if(comparedArray === 'a') {
                comparedValue = b[++j];
            } else {
                comparedValue = a[++i];
            }
        } else {
            result.push(buffer);
            buffer = comparedValue;
            if(comparedArray === 'a') {
                comparedValue = a[++i];
                comparedArray = 'b';
            } else {
                comparedValue = b[++j];
                comparedArray = 'a';
            }
        }
    }
    if(comparedArray === 'a') {
        return result.concat(a.slice(i));
    } else {
        return result.concat(b.slice(j));
    }
};

const mergeSort = (list) => {
    const mid = Math.floor(list.length / 2),
          a = list.slice(0, mid),
          b = list.slice(mid);

    if(list.length === 2) {
        return sort(a, b);
    } else if(list.length <= 1) {
        return list;
    }

    return sort(mergeSort(a), mergeSort(b));

};

console.log(mergeSort([5, 1, 4, 2, 3, 24, 6, 142, 54, 16, 81]));
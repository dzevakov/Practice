const sum = (list) => {
    if(list.length === 1) {
        return list[0];
    } else {
        return list[0] + sum(list.slice(1));
    }
};

console.log(sum([1, 2, 3, 4, 5]));
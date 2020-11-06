const myList = [1, 13, 17, 7, 4, 10, 5, 9];
let n = 0; //O(n)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const quickSort = (list) => {
    if(list.length < 2) {return list;}
    const supportElement = getRandomInt(list.length -1),
        lowest = [],
        biggest = [];

        list.forEach(element => {
            if(element > list[supportElement]) {
                biggest.push(element);
            } else if(element < list[supportElement]) {
                lowest.push(element);
            }
            n++;
        });
    
    return quickSort(lowest).concat(list[supportElement], quickSort(biggest));
};

console.log(quickSort(myList), n);
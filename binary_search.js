/* eslint-disable no-console */
function binarySearch(list, item) {
  let low = 0;
  let mid = 0;
  let guess = 0;
  let high = list.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];

    if (guess === item) {
      return mid;
    }
    if (guess < item) {
      low = mid + 1;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      return "not found";
    }
  }
  return "not found";
}

const myList = [1, 4, 5, 7, 12, 13, 15, 17];

console.log(binarySearch(myList, 14));

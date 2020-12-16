/* eslint-disable no-console */
const sort = (a, b) => {
  let i = 0;
  let j = 0;
  let comparedValue = b[i];
  let buffer = a[i];
  let comparedArray = "a";
  const result = [];

  while (buffer && comparedValue !== undefined) {
    if (buffer > comparedValue) {
      result.push(comparedValue);
      if (comparedArray === "a") {
        j += 1;
        comparedValue = b[j];
      } else {
        i += 1;
        comparedValue = a[i];
      }
    } else {
      result.push(buffer);
      buffer = comparedValue;
      if (comparedArray === "a") {
        i += 1;
        comparedValue = a[i];
        comparedArray = "b";
      } else {
        j += 1;
        comparedValue = b[j];
        comparedArray = "a";
      }
    }
  }
  if (comparedArray === "a") {
    return result.concat(a.slice(i));
  }
  return result.concat(b.slice(j));
};

const mergeSort = (list) => {
  const mid = Math.floor(list.length / 2);
  const a = list.slice(0, mid);
  const b = list.slice(mid);

  if (list.length === 2) {
    return sort(a, b);
  }
  if (list.length <= 1) {
    return list;
  }

  return sort(mergeSort(a), mergeSort(b));
};

console.log(mergeSort([5, 1, 4, 2, 3, 24, 6, 142, 54, 16, 81]));

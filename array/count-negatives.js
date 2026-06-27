// write a function that will counts the negatives number in an array

const INPUT_ARRAY = [-1, -5, 0, 5, 7, 9];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}

console.log(countNegatives(INPUT_ARRAY));

// write a function to find out the largest number in an array
const INPUT_ARRAY = [2, 8, 7, 6, 12, 14, 56];

function findLargestElement(arr) {
  let largestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

console.log("Largest Number", findLargestElement(INPUT_ARRAY));

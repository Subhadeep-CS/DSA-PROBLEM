// write a function to find out the smallest number in an array
const INPUT_ARRAY = [2, 8, 7, 6, 12, 14, 56];

function findSmallestElement(arr) {
  let smallestNumbetr = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumbetr) {
      smallestNumbetr = arr[i];
    }
  }

  return smallestNumbetr;
}

console.log("Largest Number", findSmallestElement(INPUT_ARRAY));

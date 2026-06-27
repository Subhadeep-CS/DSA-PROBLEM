// find out the second largest number in an array
const INUPUT_ARRAY = [4, 9, 0, 2, 8, 7, 1];

function findSecondLargestElement(arr) {
  if (arr.length < 2) return null;
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargestElement(INUPUT_ARRAY));

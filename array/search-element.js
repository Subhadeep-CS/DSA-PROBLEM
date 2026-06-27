// write a function that search and element in an array and if found then return the index and if not found then return -1

const SEARCH_ARRAY = [0, 5, 8, 3, 6, 7];

const SEARCH_ELEMENT = 5;

function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return 1;
    }
  }
  return -1;
}

console.log("Result=====>", searchElement(SEARCH_ARRAY, SEARCH_ELEMENT));

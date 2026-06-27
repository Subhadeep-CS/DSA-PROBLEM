# 🥈 Find Second Largest Number in Array

<div align="center">

![Problem](https://img.shields.io/badge/Problem-Second%20Largest-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange?style=for-the-badge)

**Find the second maximum element in an array**

</div>

---

## 📋 Quick Navigation

- [Problem](#-problem)
- [Solution](#-solution)
- [Q&A](#-questions--answers)
- [Complexity](#-complexity-analysis)

---

## 🎯 Problem

Write a function that finds the second largest (second maximum) number in an array.

### Requirements
- Find the second largest unique element
- Return null if array has less than 2 elements
- Handle edge cases properly

### Example
```javascript
findSecondLargestElement([4, 9, 0, 2, 8, 7, 1])     // Returns 8
findSecondLargestElement([100, 50, 75, 25])         // Returns 75
findSecondLargestElement([5, 5, 5, 5])              // Returns -Infinity
findSecondLargestElement([5])                       // Returns null
findSecondLargestElement([])                        // Returns null
```

---

## ✅ Solution

### Optimized Code
```javascript
function findSecondLargestElement(arr) {
  if (arr.length < 2) return null;  // Edge case: less than 2 elements
  
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      // Shift: first becomes second
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      // Update second largest if it's not already the first
      secondLargest = arr[i];
    }
  }
  
  return secondLargest;
}

// Test
const INPUT_ARRAY = [4, 9, 0, 2, 8, 7, 1];
console.log(findSecondLargestElement(INPUT_ARRAY));  // Output: 8
```

### Step-by-Step Breakdown

Finding second largest in `[4, 9, 0, 2, 8, 7, 1]`:

| Step | Element | Compare | Update | First | Second |
|------|---------|---------|--------|-------|--------|
| 0 | - | - | Initialize | -∞ | -∞ |
| 1 | 4 | 4 > -∞? ✅ | Shift & update | 4 | -∞ |
| 2 | 9 | 9 > 4? ✅ | Shift & update | 9 | 4 |
| 3 | 0 | 0 > 9? ❌, 0 > 4? ❌ | No change | 9 | 4 |
| 4 | 2 | 2 > 9? ❌, 2 > 4? ❌ | No change | 9 | 4 |
| 5 | 8 | 8 > 9? ❌, 8 > 4? ✅ ≠ 9? ✅ | Update second | 9 | 8 |
| 6 | 7 | 7 > 9? ❌, 7 > 8? ❌ | No change | 9 | 8 |
| 7 | 1 | 1 > 9? ❌, 1 > 8? ❌ | No change | 9 | 8 |

**Final Result: 8** ⭐

---

## ❓ Questions & Answers

<details>
<summary><strong>Q1: Why check arr[i] !== firstLargest?</strong> 🤔</summary>

> **Answer:** To ensure we find distinct values:
> 
> ```javascript
> // Without the check:
> [5, 5, 5].findSecondLargest() // Would return 5 (wrong!)
> 
> // With the check:
> [5, 5, 5].findSecondLargest() // Returns -Infinity (correct!)
> 
> // Example with distinct values:
> [9, 9, 8].findSecondLargest() // Returns 8 (skips duplicate 9)
> ```

</details>

<details>
<summary><strong>Q2: Can I use sorting instead?</strong> 🔀</summary>

> **Answer:** Yes, but it's less efficient:
> 
> ```javascript
> // Method 1: Sorting (O(n log n))
> function findSecondLargest(arr) {
>   if (arr.length < 2) return null;
>   const sorted = [...arr].sort((a, b) => b - a);  // O(n log n)
>   return sorted[1];
> }
> 
> // Method 2: Two variables (O(n)) ⭐ Better!
> function findSecondLargest(arr) {
>   if (arr.length < 2) return null;
>   let first = -Infinity, second = -Infinity;
>   for (let i = 0; i < arr.length; i++) {
>     if (arr[i] > first) {
>       second = first;
>       first = arr[i];
>     } else if (arr[i] > second && arr[i] !== first) {
>       second = arr[i];
>     }
>   }
>   return second;
> }
> 
> // O(n) is better than O(n log n)!
> ```

</details>

<details>
<summary><strong>Q3: What about duplicates?</strong> 🔀</summary>

> **Answer:** Handled by checking `arr[i] !== firstLargest`:
> 
> ```javascript
> [9, 9, 8, 7]      // Returns 8 (skips duplicate 9s)
> [5, 5, 5, 5]      // Returns -Infinity (all same)
> [10, 8, 10, 6]    // Returns 8 (ignores duplicate 10)
> ```

</details>

<details>
<summary><strong>Q4: What if array has less than 2 elements?</strong> 📭</summary>

> **Answer:** Return null (no second element):
> 
> ```javascript
> findSecondLargestElement([5])       // Returns null
> findSecondLargestElement([])        // Returns null
> findSecondLargestElement([5, 5])    // Returns -Infinity
> ```

</details>

<details>
<summary><strong>Q5: Does it work with negative numbers?</strong> 🔢</summary>

> **Answer:** Yes, perfectly:
> 
> ```javascript
> findSecondLargestElement([-1, -5, -10, -2])  // Returns -2
> // First largest: -1
> // Second largest: -2
> ```

</details>

---

## 📊 Complexity Analysis

### Time Complexity: **O(n)**
- Single pass through array
- Constant time operations per element
- **n** = array length

```
Array: [4, 9, 0, 2, 8, 7, 1]
Iterations: 7
Best case:  O(n)
Worst case: O(n)
Average:    O(n)
```

### Space Complexity: **O(1)**
- Only two variables (firstLargest, secondLargest)
- No extra data structures
- Constant space regardless of input

---

## 🚀 Performance Comparison

```javascript
const largeArray = Array.from({length: 1000000}, () => Math.random() * 1000);

// Method 1: Two variables (Optimal)
console.time("Two Variables");
findSecondLargestElement(largeArray);
console.timeEnd("Two Variables");
// ~1-2ms ✅ FASTEST

// Method 2: Sorting
console.time("Sort Method");
const sorted = [...largeArray].sort((a, b) => b - a);
sorted[1];
console.timeEnd("Sort Method");
// ~50-100ms ❌ SLOWEST

// Method 3: Using Set for unique values
console.time("Set Method");
const unique = [...new Set(largeArray)].sort((a, b) => b - a)[1];
console.timeEnd("Set Method");
// ~100-150ms
```

**Winner: Two Variables Approach** ✅

---

## 💡 Tips & Best Practices

✅ **DO:**
- Check edge cases first
- Use two variables to track largest & second largest
- Ensure unique values
- Handle negative numbers

❌ **DON'T:**
- Sort the array (inefficient)
- Forget edge cases
- Assume array has 2+ elements
- Modify the original array

---

## 🔗 Related Problems

- [Largest Number](02-largest-number.md) - Find maximum
- [Smallest Number](05-smallest-number.md) - Find minimum
- [Count Negatives](01-count-negatives.md) - Count elements

---

## 📖 Go Back

[← Back to Array Index](INDEX.md)

---

<div align="center">

**Next Problem: [Smallest Number →](05-smallest-number.md)**

</div>

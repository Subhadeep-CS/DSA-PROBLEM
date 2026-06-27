# 📉 Find Smallest Number in Array

<div align="center">

![Problem](https://img.shields.io/badge/Problem-Smallest%20Number-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)

**Find the minimum element in an array**

</div>

---

## 📋 Quick Navigation

- [Problem](#-problem)
- [Solution](#-solution)
- [Q&A](#-questions--answers)
- [Complexity](#-complexity-analysis)

---

## 🎯 Problem

Write a function that finds the smallest (minimum) number in an array.

### Requirements
- Iterate through the array
- Compare each element
- Track and return the smallest value

### Example
```javascript
findSmallestElement([2, 8, 7, 6, 12, 14, 56])    // Returns 2
findSmallestElement([100, 50, 75, 25])           // Returns 25
findSmallestElement([-5, -2, -10, -1])           // Returns -10
```

---

## ✅ Solution

### Optimized Code
```javascript
function findSmallestElement(arr) {
  let smallestNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

// Test
const INPUT_ARRAY = [2, 8, 7, 6, 12, 14, 56];
console.log("Smallest Number:", findSmallestElement(INPUT_ARRAY));  // Output: 2
```

### Step-by-Step Breakdown

| Step | Element | Compare | Update | Current Min |
|------|---------|---------|--------|-------------|
| 0 | Start | - | Initialize | Infinity |
| 1 | 2 | 2 < Infinity? ✅ | smallestNumber = 2 | 2 |
| 2 | 8 | 8 < 2? ❌ | (no update) | 2 |
| 3 | 7 | 7 < 2? ❌ | (no update) | 2 |
| 4 | 6 | 6 < 2? ❌ | (no update) | 2 |
| 5 | 12 | 12 < 2? ❌ | (no update) | 2 |
| 6 | 14 | 14 < 2? ❌ | (no update) | 2 |
| 7 | 56 | 56 < 2? ❌ | (no update) | 2 |

**Final Result: 2**

---

## ❓ Questions & Answers

<details>
<summary><strong>Q1: Why start with Infinity?</strong> ♾️</summary>

> **Answer:** To ensure any array value is less than the initial value:
> 
> ```javascript
> // ✅ CORRECT - Works with any numbers
> let min = Infinity;
> findSmallestElement([-5, -2, -10])  // Returns -10
> 
> // ❌ WRONG - Fails with positive numbers starting with 0
> let min = 0;
> findSmallestElement([5, 10, 15])   // Returns 0 (WRONG!)
> 
> // ✅ Also works - Initialize with first element
> let min = arr[0];
> ```

</details>

<details>
<summary><strong>Q2: Can I use Math.min() instead?</strong> 📊</summary>

> **Answer:** Yes, but understand the trade-offs:
> 
> ```javascript
> // Method 1: Built-in (simple, readable)
> Math.min(...arr)  // [2, 8, 7, 6, 12, 14, 56] → 2
> 
> // Method 2: For loop (efficient, explicit)
> function findSmallestElement(arr) {
>   let min = Infinity;
>   for (let i = 0; i < arr.length; i++) {
>     if (arr[i] < min) min = arr[i];
>   }
>   return min;
> }
> 
> // Method 3: Reduce (functional)
> arr.reduce((min, num) => num < min ? num : min)
> 
> // Method 4: sort() (less efficient)
> [...arr].sort((a, b) => a - b)[0]  // O(n log n)
> ```
> 
> **For learning:** Use the loop. **For production:** Use `Math.min()` ⭐

</details>

<details>
<summary><strong>Q3: What if array has duplicates?</strong> 🔀</summary>

> **Answer:** Returns the value (not affected by duplicates):
> 
> ```javascript
> findSmallestElement([5, 5, 5, 5])     // Returns 5
> findSmallestElement([3, 8, 2, 2])     // Returns 2
> 
> // Duplicates don't affect the result
> ```

</details>

<details>
<summary><strong>Q4: What if array is empty?</strong> 📭</summary>

> **Answer:** Returns Infinity (no valid minimum):
> 
> ```javascript
> findSmallestElement([])  // Returns Infinity
> 
> // Better practice - handle empty arrays:
> function findSmallestElement(arr) {
>   if (arr.length === 0) return null;  // or throw error
>   let min = arr[0];
>   for (let i = 1; i < arr.length; i++) {
>     if (arr[i] < min) min = arr[i];
>   }
>   return min;
> }
> ```

</details>

<details>
<summary><strong>Q5: What about NaN values?</strong> 🔢</summary>

> **Answer:** NaN breaks the comparison:
> 
> ```javascript
> // NaN comparisons always return false
> NaN < 5     // false
> 5 < NaN     // false
> NaN < NaN   // false
> 
> findSmallestElement([5, NaN, 10])  // Returns 5 (NaN skipped)
> 
> // To handle NaN, filter it out first:
> function findSmallestElement(arr) {
>   const valid = arr.filter(n => !isNaN(n));
>   if (valid.length === 0) return null;
>   let min = Infinity;
>   for (let i = 0; i < valid.length; i++) {
>     if (valid[i] < min) min = valid[i];
>   }
>   return min;
> }
> ```

</details>

---

## 📊 Complexity Analysis

### Time Complexity: **O(n)**
- Single pass through entire array
- One comparison per element
- **n** = array length

```
Array: [2, 8, 7, 6, 12, 14, 56]
Iterations: 7
Best case:  O(n)
Worst case: O(n)
Average:    O(n)
```

### Space Complexity: **O(1)**
- Only one variable used for tracking min
- No additional arrays or data structures
- Constant space usage

---

## 🚀 Performance Comparison

```javascript
// Test with large array
const largeArray = Array.from({length: 1000000}, () => Math.random() * 1000);

console.time("For Loop");
findSmallestElement(largeArray);
console.timeEnd("For Loop");
// ~1-2ms ✅ FASTEST

console.time("Math.min");
Math.min(...largeArray);
console.timeEnd("Math.min");
// ~3-5ms (with spread operator overhead)

console.time("Reduce");
largeArray.reduce((min, n) => n < min ? n : min);
console.timeEnd("Reduce");
// ~8-10ms

console.time("Sort");
[...largeArray].sort((a, b) => a - b)[0];
console.timeEnd("Sort");
// ~50-100ms ❌ SLOWEST
```

**Winner: For Loop** ✅ (Most efficient)

---

## 💡 Tips & Best Practices

✅ **DO:**
- Start with Infinity or arr[0]
- Compare with <
- Return the minimum value
- Handle edge cases

❌ **DON'T:**
- Modify the original array
- Use nested loops
- Assume array is non-empty without checking
- Use sorting for simple min/max

---

## 🔗 Related Problems

- [Largest Number](02-largest-number.md) - Find maximum
- [Count Negatives](01-count-negatives.md) - Count specific elements
- [Second Largest](04-second-largest.md) - Find second maximum

---

## 📖 Go Back

[← Back to Array Index](INDEX.md)

---

<div align="center">

**Completed All Problems! 🎉**

[← Back to Main Index](../README.md)

</div>

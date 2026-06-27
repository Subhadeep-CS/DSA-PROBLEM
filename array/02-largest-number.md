# 📈 Find Largest Number in Array

<div align="center">

![Problem](https://img.shields.io/badge/Problem-Largest%20Number-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)

**Find the maximum element in an array**

</div>

---

## 📋 Quick Navigation

- [Problem](#-problem)
- [Solution](#-solution)
- [Q&A](#-questions--answers)
- [Complexity](#-complexity-analysis)

---

## 🎯 Problem

Write a function that finds the largest (maximum) number in an array.

### Requirements
- Iterate through the array
- Compare each element
- Track and return the largest value

### Example
```javascript
findLargestElement([2, 8, 7, 6, 12, 14, 56])    // Returns 56
findLargestElement([100, 50, 75, 25])           // Returns 100
findLargestElement([-5, -2, -10, -1])           // Returns -1
```

---

## ✅ Solution

### Optimized Code
```javascript
function findLargestElement(arr) {
  let largestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

// Test
const INPUT_ARRAY = [2, 8, 7, 6, 12, 14, 56];
console.log("Largest Number:", findLargestElement(INPUT_ARRAY));  // Output: 56
```

### Step-by-Step Breakdown

| Step | Element | Compare | Update | Current Max |
|------|---------|---------|--------|-------------|
| 0 | Start | - | Initialize | -Infinity |
| 1 | 2 | 2 > -Infinity? ✅ | largestNumber = 2 | 2 |
| 2 | 8 | 8 > 2? ✅ | largestNumber = 8 | 8 |
| 3 | 7 | 7 > 8? ❌ | (no update) | 8 |
| 4 | 6 | 6 > 8? ❌ | (no update) | 8 |
| 5 | 12 | 12 > 8? ✅ | largestNumber = 12 | 12 |
| 6 | 14 | 14 > 12? ✅ | largestNumber = 14 | 14 |
| 7 | 56 | 56 > 14? ✅ | largestNumber = 56 | 56 |

**Final Result: 56**

---

## ❓ Questions & Answers

<details>
<summary><strong>Q1: Why start with -Infinity?</strong> ♾️</summary>

> **Answer:** To ensure any array value is greater than the initial value:
> 
> ```javascript
> // ✅ CORRECT - Works with negative numbers
> let max = -Infinity;
> findLargestElement([-5, -2, -10])  // Returns -1
> 
> // ❌ WRONG - Fails with negative numbers
> let max = 0;
> findLargestElement([-5, -2, -10])  // Returns 0 (WRONG!)
> 
> // ✅ Also works - Initialize with first element
> let max = arr[0];
> ```

</details>

<details>
<summary><strong>Q2: Can I use Math.max() instead?</strong> 📊</summary>

> **Answer:** Yes, but understand the trade-offs:
> 
> ```javascript
> // Method 1: Built-in (simple, readable)
> Math.max(...arr)  // [2, 8, 7, 6, 12, 14, 56] → 56
> 
> // Method 2: For loop (efficient, explicit)
> function findLargestElement(arr) {
>   let max = -Infinity;
>   for (let i = 0; i < arr.length; i++) {
>     if (arr[i] > max) max = arr[i];
>   }
>   return max;
> }
> 
> // Method 3: Reduce (functional)
> arr.reduce((max, num) => num > max ? num : max)
> ```
> 
> **For learning:** Use the loop. **For production:** Use `Math.max()` ⭐

</details>

<details>
<summary><strong>Q3: What if array has duplicates?</strong> 🔀</summary>

> **Answer:** Returns the value (not affected by duplicates):
> 
> ```javascript
> findLargestElement([5, 5, 5, 5])     // Returns 5
> findLargestElement([3, 8, 8, 2])     // Returns 8
> 
> // Duplicates don't affect the result
> ```

</details>

<details>
<summary><strong>Q4: What if array is empty?</strong> 📭</summary>

> **Answer:** Returns -Infinity (no valid maximum):
> 
> ```javascript
> findLargestElement([])  // Returns -Infinity
> 
> // Better practice - handle empty arrays:
> function findLargestElement(arr) {
>   if (arr.length === 0) return null;  // or throw error
>   let max = arr[0];
>   for (let i = 1; i < arr.length; i++) {
>     if (arr[i] > max) max = arr[i];
>   }
>   return max;
> }
> ```

</details>

<details>
<summary><strong>Q5: Does it work with floats?</strong> 🔢</summary>

> **Answer:** Yes! Works with any number type:
> 
> ```javascript
> findLargestElement([3.14, 2.71, 1.41, 2.5])  // Returns 3.14
> findLargestElement([100, 99.99, 100.01])     // Returns 100.01
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
- Only one variable used for tracking max
- No additional arrays or data structures
- Constant space usage

---

## 🚀 Performance Comparison

```javascript
// Test with large array
const largeArray = Array.from({length: 1000000}, () => Math.random() * 1000);

console.time("For Loop");
findLargestElement(largeArray);
console.timeEnd("For Loop");
// ~1-2ms

console.time("Math.max");
Math.max(...largeArray);
console.timeEnd("Math.max");
// ⚠️ Stack overflow for very large arrays!

console.time("Reduce");
largeArray.reduce((max, n) => n > max ? n : max);
console.timeEnd("Reduce");
// ~8-10ms
```

**Winner: For Loop** ✅ (Most efficient & reliable)

---

## 💡 Tips & Best Practices

✅ **DO:**
- Start with -Infinity or arr[0]
- Compare with >
- Return the maximum value

❌ **DON'T:**
- Modify the original array
- Use nested loops
- Assume array is non-empty without checking

---

## 🔗 Related Problems

- [Count Negatives](01-count-negatives.md) - Count specific elements
- [Smallest Number](05-smallest-number.md) - Find minimum
- [Second Largest](04-second-largest.md) - Find second maximum

---

## 📖 Go Back

[← Back to Array Index](INDEX.md)

---

<div align="center">

**Next Problem: [Search Element →](03-search-element.md)**

</div>

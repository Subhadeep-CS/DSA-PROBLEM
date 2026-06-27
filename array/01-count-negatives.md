# 🔢 Count Negatives in Array

<div align="center">

![Problem](https://img.shields.io/badge/Problem-Count%20Negatives-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)

**Count how many negative numbers exist in an array**

</div>

---

## 📋 Quick Navigation

- [Problem](#-problem)
- [Solution](#-solution)
- [Q&A](#-questions--answers)
- [Complexity](#-complexity-analysis)

---

## 🎯 Problem

Write a function that counts all negative numbers in an array.

### Requirements
- Iterate through the array
- Count elements less than 0
- Return the total count

### Example
```javascript
countNegatives([-1, -5, 0, 5, 7, 9])     // Returns 2
countNegatives([1, 2, 3, 4])             // Returns 0
countNegatives([-1, -2, -3, -4, -5])     // Returns 5
```

---

## ✅ Solution

### Optimized Code
```javascript
function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// Test
const INPUT_ARRAY = [-1, -5, 0, 5, 7, 9];
console.log(countNegatives(INPUT_ARRAY));  // Output: 2
```

### Step-by-Step Breakdown

| Step | Element | Check | Count |
|------|---------|-------|-------|
| 1 | -1 | -1 < 0? ✅ Yes | 1 |
| 2 | -5 | -5 < 0? ✅ Yes | 2 |
| 3 | 0 | 0 < 0? ❌ No | 2 |
| 4 | 5 | 5 < 0? ❌ No | 2 |
| 5 | 7 | 7 < 0? ❌ No | 2 |
| 6 | 9 | 9 < 0? ❌ No | 2 |

**Final Result: 2**

---

## ❓ Questions & Answers

<details>
<summary><strong>Q1: Can I use filter() method?</strong> 🔍</summary>

> **Answer:** Yes! Here are alternative approaches:
> 
> ```javascript
> // Method 1: filter() - Returns array of negatives
> arr.filter(num => num < 0).length
> 
> // Method 2: reduce() - Accumulates count
> arr.reduce((count, num) => num < 0 ? count + 1 : count, 0)
> 
> // Method 3: for loop (most efficient) ⭐
> let count = 0;
> for (let i = 0; i < arr.length; i++) {
>   if (arr[i] < 0) count++;
> }
> ```

</details>

<details>
<summary><strong>Q2: What about negative zero (-0)?</strong> ❄️</summary>

> **Answer:** In JavaScript, -0 is treated as 0 for comparison purposes:
> 
> ```javascript
> -0 < 0       // false (won't be counted)
> Object.is(-0, 0)  // false (different, but both fail < 0)
> ```
> 
> So -0 won't be counted, which is correct behavior.

</details>

<details>
<summary><strong>Q3: What if the array is empty?</strong> 📭</summary>

> **Answer:** The function returns 0 (the initialized count):
> 
> ```javascript
> countNegatives([])  // Returns 0
> 
> // The loop never executes because arr.length = 0
> ```

</details>

<details>
<summary><strong>Q4: Does order matter?</strong> 🔀</summary>

> **Answer:** No! Order doesn't matter for counting:
> 
> ```javascript
> countNegatives([-1, 5, -5, 0, 9])    // Returns 2
> countNegatives([5, -1, 0, -5, 9])    // Returns 2 (same result)
> ```

</details>

<details>
<summary><strong>Q5: Should I use < or ≤?</strong> ⚖️</summary>

> **Answer:** Use `<` for negatives (less than 0):
> 
> ```javascript
> if (arr[i] < 0)   // ✅ Correct - only negatives
> if (arr[i] <= 0)  // ❌ Wrong - includes zero
> 
> // Zero is neither positive nor negative
> ```

</details>

---

## 📊 Complexity Analysis

### Time Complexity: **O(n)**
- Single pass through array
- Must check every element once
- **n** = array length

```
Array: [-1, -5, 0, 5, 7, 9]
Iterations: 6
Best case:  O(n) - Always iterate all elements
Worst case: O(n) - Always iterate all elements
Average:    O(n)
```

### Space Complexity: **O(1)**
- Only using a counter variable
- No extra data structures
- Constant space regardless of input size

---

## 🚀 Performance Comparison

```javascript
// Test with large array
const largeArray = Array.from({length: 1000000}, () => Math.random() * 10 - 5);

console.time("For Loop");
countNegatives(largeArray);
console.timeEnd("For Loop");
// ~2-3ms

console.time("Filter");
largeArray.filter(n => n < 0).length;
console.timeEnd("Filter");
// ~15-20ms (creates new array)

console.time("Reduce");
largeArray.reduce((count, n) => n < 0 ? count + 1 : count, 0);
console.timeEnd("Reduce");
// ~8-10ms
```

**Winner: For Loop** ✅ (Most efficient)

---

## 💡 Tips & Best Practices

✅ **DO:**
- Use simple iteration when possible
- Initialize count to 0
- Return count when done

❌ **DON'T:**
- Modify the original array
- Use nested loops unnecessarily
- Forget edge cases (empty array)

---

## 🔗 Related Problems

- [Largest Number](02-largest-number.md) - Find maximum
- [Smallest Number](05-smallest-number.md) - Find minimum
- [Search Element](03-search-element.md) - Search & find

---

## 📖 Go Back

[← Back to Array Index](INDEX.md)

---

<div align="center">

**Next Problem: [Largest Number →](02-largest-number.md)**

</div>

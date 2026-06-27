# 🔍 Search Element in Array

<div align="center">

![Problem](https://img.shields.io/badge/Problem-Search%20Element-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)

**Find an element's index in an array using linear search**

</div>

---

## 📋 Quick Navigation

- [Problem](#-problem)
- [Q&A](#-questions--answers)
- [Solution](#-solution)
- [Complexity](#-complexity)

---

## 🎯 Problem

Write a function that searches for an element in an array:
- **Found** → return the **index**
- **Not Found** → return **-1**

### Example
```javascript
searchElement([0, 5, 8, 3, 6, 7], 5)   // Returns 1
searchElement([0, 5, 8, 3, 6, 7], 10)  // Returns -1
```

---

## ❓ Questions & Answers

<details>
<summary><strong>Q1: Why does the code return 1 instead of the actual index?</strong> 🐛</summary>

> **Answer:** This is a **BUG!** The current code always returns `1` when found, but it should return `i` (the actual index).
> 
> ```javascript
> // ❌ WRONG - Always returns 1
> if (arr[i] == number) {
>   return 1;  // Bug!
> }
> 
> // ✅ CORRECT - Returns actual index
> if (arr[i] === number) {
>   return i;  // Returns 0, 1, 2, etc.
> }
> ```

</details>

<details>
<summary><strong>Q2: Should I use == or ===?</strong> ⚖️</summary>

> **Answer:** Use `===` (strict equality) for better practice.
> 
> ```javascript
> // == (loose) - converts types
> 5 == "5"   // true
> 
> // === (strict) - compares value AND type
> 5 === "5"  // false
> ```
> 
> Always prefer `===` in JavaScript!

</details>

<details>
<summary><strong>Q3: Can I use JavaScript's built-in methods instead?</strong> 🛠️</summary>

> **Answer:** Yes! For production code, use:
> 
> ```javascript
> // Method 1: indexOf()
> arr.indexOf(5)  // Returns 1
> 
> // Method 2: findIndex()
> arr.findIndex(el => el === 5)  // Returns 1
> 
> // But for learning, the manual loop is better!
> ```

</details>

<details>
<summary><strong>Q4: What if there are duplicate elements?</strong> 🔀</summary>

> **Answer:** It returns the **first occurrence**:
> 
> ```javascript
> searchElement([1, 5, 3, 5, 7], 5)  // Returns 1 (first index)
> ```
> 
> If you need the last occurrence, loop from the end:
> ```javascript
> for (let i = arr.length - 1; i >= 0; i--) {
>   if (arr[i] === number) return i;
> }
> ```

</details>

<details>
<summary><strong>Q5: What about empty arrays or edge cases?</strong> ⚠️</summary>

> **Answer:** 
> 
> ```javascript
> searchElement([], 5)       // -1 (empty array)
> searchElement([5], 5)      // 0 (single element)
> searchElement([5], 10)     // -1 (not found)
> searchElement([0, null, -1], 0)  // 0 (works with any value)
> ```

</details>

---

## 💻 Solution

### Corrected Code ✅

```javascript
function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;  // ✅ Return the index, not 1!
    }
  }
  return -1;  // Not found
}

// Test
console.log(searchElement([0, 5, 8, 3, 6, 7], 5));   // 1
console.log(searchElement([0, 5, 8, 3, 6, 7], 10));  // -1
```

### How It Works

```
Array:     [ 0,  5,  8,  3,  6,  7 ]
Index:     [ 0,  1,  2,  3,  4,  5 ]

Search for 5:
├─ Check i=0 → arr[0]=0 ≠ 5 ✗ Continue
├─ Check i=1 → arr[1]=5 = 5 ✓ FOUND! Return 1
```

---

## ⏱️ Complexity

| Metric | Value |
|--------|-------|
| **Time Complexity** | O(n) |
| **Space Complexity** | O(1) |
| **Best Case** | O(1) - element at first position |
| **Worst Case** | O(n) - element at end or not found |

---

<div align="center">

**Happy Coding! 🚀**

</div>

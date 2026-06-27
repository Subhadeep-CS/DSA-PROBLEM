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
- [Solution](#-solution)
- [Q&A](#-questions--answers)
- [Complexity](#-complexity-analysis)

---

## 🎯 Problem

Write a function that searches for an element in an array:
- **Found** → return the **index**
- **Not Found** → return **-1**

### Requirements
- Search for a specific value
- Return index if found
- Return -1 if not found
- Return first occurrence for duplicates

### Example
```javascript
searchElement([0, 5, 8, 3, 6, 7], 5)      // Returns 1
searchElement([0, 5, 8, 3, 6, 7], 10)     // Returns -1
searchElement([1, 5, 3, 5, 7], 5)         // Returns 1 (first occurrence)
```

---

## ✅ Solution

### Correct Code
```javascript
function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {      // ✅ Use === (strict equality)
      return i;                   // ✅ Return actual index, not 1
    }
  }
  return -1;                      // Return -1 if not found
}

// Test
const SEARCH_ARRAY = [0, 5, 8, 3, 6, 7];
console.log("Result:", searchElement(SEARCH_ARRAY, 5));   // Output: 1
console.log("Result:", searchElement(SEARCH_ARRAY, 10));  // Output: -1
```

### Common Bug Alert 🐛

```javascript
// ❌ WRONG - Always returns 1 when found
function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
      return 1;  // BUG! Should return i
    }
  }
  return -1;
}

// ✅ CORRECT - Returns actual index
function searchElement(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;  // Return 0, 1, 2, etc.
    }
  }
  return -1;
}
```

### Step-by-Step Breakdown

Searching for **5** in `[0, 5, 8, 3, 6, 7]`:

| Step | Index | Element | Compare | Found? | Return |
|------|-------|---------|---------|--------|--------|
| 1 | 0 | 0 | 0 === 5? ❌ | No | - |
| 2 | 1 | 5 | 5 === 5? ✅ | Yes | **1** |

---

## ❓ Questions & Answers

<details>
<summary><strong>Q1: Why use === instead of ==?</strong> ⚖️</summary>

> **Answer:** Use `===` (strict equality) to avoid type coercion bugs:
> 
> ```javascript
> // == (loose equality) - converts types
> 5 == "5"           // true (converts string to number)
> 0 == false         // true (converts boolean)
> null == undefined  // true
> 
> // === (strict equality) - compares value AND type
> 5 === "5"          // false
> 0 === false        // false
> null === undefined // false
> ```
> 
> **Rule:** Always use `===` in JavaScript! ⭐

</details>

<details>
<summary><strong>Q2: Can I use JavaScript's built-in methods?</strong> 🛠️</summary>

> **Answer:** Yes! For production code, these are better:
> 
> ```javascript
> // Method 1: indexOf() - Returns index or -1
> [0, 5, 8, 3, 6, 7].indexOf(5)  // Returns 1
> [0, 5, 8, 3, 6, 7].indexOf(10) // Returns -1
> 
> // Method 2: findIndex() - For complex conditions
> [0, 5, 8, 3, 6, 7].findIndex(el => el === 5)  // Returns 1
> 
> // Method 3: includes() - Just check existence
> [0, 5, 8, 3, 6, 7].includes(5)  // Returns true/false
> 
> // For learning, implement manually ✅
> // For production, use built-in ⭐
> ```

</details>

<details>
<summary><strong>Q3: What if there are duplicate elements?</strong> 🔀</summary>

> **Answer:** Returns the **first occurrence**:
> 
> ```javascript
> searchElement([1, 5, 3, 5, 7], 5)  // Returns 1 (first index)
> 
> // To find all occurrences:
> function searchAllElements(arr, number) {
>   const indices = [];
>   for (let i = 0; i < arr.length; i++) {
>     if (arr[i] === number) {
>       indices.push(i);
>     }
>   }
>   return indices;
> }
> 
> searchAllElements([1, 5, 3, 5, 7], 5)  // Returns [1, 3]
> ```

</details>

<details>
<summary><strong>Q4: What if array is empty?</strong> 📭</summary>

> **Answer:** Returns -1 (element not found):
> 
> ```javascript
> searchElement([], 5)  // Returns -1
> 
> // The loop doesn't execute
> ```

</details>

<details>
<summary><strong>Q5: Does it work with different data types?</strong> 🔢</summary>

> **Answer:** Yes, with strict equality:
> 
> ```javascript
> // Works with strings
> searchElement(['a', 'b', 'c'], 'b')  // Returns 1
> 
> // Works with objects
> const obj = {name: 'John'};
> searchElement([{name: 'Jane'}, obj], obj)  // Returns 1
> 
> // But note object comparison:
> searchElement([{name: 'John'}, {name: 'John'}], {name: 'John'})
> // Returns -1 (different object instances!)
> ```

</details>

---

## 📊 Complexity Analysis

### Time Complexity: **O(n)**
- In worst case, search entire array
- **n** = array length

```
Array: [0, 5, 8, 3, 6, 7]
Best case:    O(1) - Element at index 0
Worst case:   O(n) - Element at last or not found
Average case: O(n/2) ≈ O(n)
```

### Space Complexity: **O(1)**
- No extra data structures
- Only loop variable and index tracking
- Constant space usage

---

## 🚀 Performance Comparison

```javascript
const arr = Array.from({length: 1000000}, (_, i) => i);

// Test 1: Element near beginning
console.time("For Loop");
searchElement(arr, 100);
console.timeEnd("For Loop");
// ~0.1ms

// Test 2: Element at end
console.time("For Loop");
searchElement(arr, 999999);
console.timeEnd("For Loop");
// ~5-10ms

// Built-in methods (faster internally)
console.time("indexOf");
arr.indexOf(999999);
console.timeEnd("indexOf");
// ~3-5ms (optimized)
```

---

## 💡 Tips & Best Practices

✅ **DO:**
- Use `===` for strict comparison
- Return index when found
- Return -1 when not found
- Document expected behavior

❌ **DON'T:**
- Use `==` (loose equality)
- Return 1 when found (always return actual index)
- Modify the original array
- Assume array is sorted (unless specified)

---

## 🔗 Related Problems

- [Count Negatives](01-count-negatives.md) - Count elements
- [Largest Number](02-largest-number.md) - Find maximum
- [Second Largest](04-second-largest.md) - Compare elements

---

## 📖 Go Back

[← Back to Array Index](INDEX.md)

---

<div align="center">

**Next Problem: [Second Largest →](04-second-largest.md)**

</div>

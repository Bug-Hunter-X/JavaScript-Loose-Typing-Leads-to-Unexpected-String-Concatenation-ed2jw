# JavaScript Loose Typing Bug

This repository demonstrates a common error in JavaScript related to loose typing.  When performing arithmetic operations, JavaScript's automatic type coercion can lead to unexpected results if you mix numbers and strings.

The `bug.js` file contains code that exemplifies this issue. The `bugSolution.js` file provides a corrected version.

## Problem

The `add` function is intended to add two numbers. However, due to JavaScript's loose typing, if you pass a number and a string, it performs string concatenation instead of numerical addition.

## Solution

The solution involves explicitly converting the inputs to numbers using `parseInt()` or `parseFloat()` before performing the addition to ensure correct numerical operations.  This guarantees that the function behaves as intended.
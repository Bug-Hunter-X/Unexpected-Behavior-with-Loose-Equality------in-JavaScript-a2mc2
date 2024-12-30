# JavaScript Loose Equality Bug

This repository demonstrates a common error in JavaScript related to loose equality (==) comparisons.  Loose equality performs type coercion before comparison, which can lead to unexpected behavior if not handled carefully.

The `bug.js` file contains code that showcases this issue. The `bugSolution.js` file provides a corrected version using strict equality (===).

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, browser console).
3. Observe the unexpected results when comparing numbers and strings with loose equality.
4. Compare the results with the corrected version in `bugSolution.js`, which uses strict equality.

##  Lesson Learned

Always use the strict equality operator (===) in JavaScript to avoid unexpected type coercion issues when comparing values.  This ensures that both the value and type are checked for equality.
/**
 * Validates if a string of parentheses, brackets, and braces is properly closed.
 * 
 * @param {string} s - The input string containing only '()[]{}'
 * @returns {boolean} True if the string has valid parentheses, false otherwise
 * 
 * @example
 * // For input "()":
 * // Iteration 1: stack = ['(']
 * // Iteration 2: stack = [] (matches ')' with '(')
 * // Returns true as stack is empty
 * 
 * @example
 * // For input "([)]":
 * // Iteration 1: char='(' → stack = ['(']
 * // Iteration 2: char='[' → stack = ['(', '['] 
 * // Iteration 3: char=')' → stack.pop() returns '[', but pairs[')'] is '(', so '[' !== '(' → returns false immediately
 * 
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) where n is the length of the string in worst case
 */
function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (!pairs[char]) {
      // Opening bracket
      stack.push(char);
    } else {
      // Closing bracket
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

module.exports = { isValid };
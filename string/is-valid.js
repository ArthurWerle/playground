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
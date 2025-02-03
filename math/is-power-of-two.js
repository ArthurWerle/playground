function isPowerOfTwo(n) {
  if (n < 1) return false
  
  while (n > 1) {
    if (n % 2 !== 0) return false

    n = n / 2
  }

  return true
}

// Big-O: O(log n)

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(218)) // false

function isPowerOfTwoBitWise(n) {
  if (n < 1) return false

  // this is a bitwise operation that checks if n is a power of 2
  // if n is a power of 2, then n & (n - 1) will be 0
  // for example, 8 is a power of 2, so 8 & (8 - 1) will be 0
  return (n & (n - 1)) === 0
}

// Big-O: O(1)
// Big-O: O(n)
function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log('base fibonacci', fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Big-O: O(n)
function recursiveFibonacci(n, sequence = [0, 1]) {
  if (sequence.length === n) return sequence

  return recursiveFibonacci(n, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]])
} 

console.log('recursive fibonacci', recursiveFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Big-O: O(2^n)
function anotherRecursiveFibonacci(n) {
  if (n < 2) return n

  return anotherRecursiveFibonacci(n-1) + anotherRecursiveFibonacci(n-2)
}

console.log('another recursive fibonacci', anotherRecursiveFibonacci(6)); // Output: 8
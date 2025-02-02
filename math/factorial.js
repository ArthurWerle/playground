function factorial(n) {
  if (n === 0) {
    return 1
  }

  return factorial(n - 1) * n
}

console.log(factorial(5))

// ----------------------------------------------------------------------------------------------------------------------------

function factorial2(n) {
  let result = 1

  for(let i = 2; i <= n; i++) {
    result = result * i
  }

  return result
}

console.log(factorial2(5))
/**
 * Big-O: O(n)
 */
function linearSearch(array, element) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === element) return i
  }

  return -1
}

const array = [10, 2, 12, 27, 33, 0, 44, 5]

console.log(linearSearch(array, 3))
console.log(linearSearch(array, 2))
console.log(linearSearch(array, 27))
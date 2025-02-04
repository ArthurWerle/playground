/**
 * Big-O: O(log n)
 */
function binarySearch(array, element) {
  let left = 0
  let right = array.length

  while(left <= right) {
    const middle = Math.floor((left+right)/2)

    if (array[middle] === element) return middle

    if (array[middle] > element) right = middle
    else left = middle
  }

  return -1
}

const array = [1, 4, 7, 12, 25, 33, 45, 80, 120, 300, 75060]

console.log('binarySearch', binarySearch(array, 4))
console.log('binarySearch', binarySearch(array, 33))
console.log('binarySearch', binarySearch(array, 120))


function recursiveBinarySearch(array, element, left = 0, right = array.length - 1) {
  if (left > right) return -1

  const middle = Math.floor((left + right) / 2)

  if (array[middle] === element) return middle

  if (array[middle] > element) {
    return recursiveBinarySearch(array, element, left, middle - 1)
  } else {
    return recursiveBinarySearch(array, element, middle + 1, right)
  }
}

console.log('recursiveBinarySearch', recursiveBinarySearch(array, 4))
console.log('recursiveBinarySearch', recursiveBinarySearch(array, 33))
console.log('recursiveBinarySearch', recursiveBinarySearch(array, 120))
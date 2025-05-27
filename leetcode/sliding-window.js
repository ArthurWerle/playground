// const ARRAY = [3, 6, 1, 4, 7, 2, 9, 8, 5]

// function sort(array) {
    
// }

// sort(ARRAY)

// const text = "This is a sample text where I'm searching for a term. This is a search. Sea. Seals."
// const searchTerm = "sea"
// const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'))

// console.log({
//     parts,
//     length: parts.length
// })

const array = ['a', 'b', 'c', 'c', 'a', 'c', 'c', 'a', 'b', 'b', 'b', 'a', 'c']

// find the biggest substring where elements repeat less than 3 times
function slidingWindow(array) {
    let left = 0
    let right = 0
    let max = 0
    let occurences = new Map()

    while(right < array.length) {
        const current = array[right]
        
        if (occurences.has(current)) {
            occurences.set(current, occurences.get(current) + 1)
        } else {
            occurences.set(current, 1)
        }

        while(occurences.get(current) > 2) {
            const leftChar = array[left]
            occurences.set(leftChar, occurences.get(leftChar) - 1)
            left++
        }

        max = Math.max(max, right - left + 1)
        right++
    }

    return max
}

console.log(slidingWindow(array))
let counter = 0

/**
 * Implements the Bubble Sort algorithm to sort an array in ascending order.
 * 
 * @param {number[]} nums - The array to be sorted
 * @returns {number[]} The sorted array
 * 
 * @example
 * // For input [5, 4, 3, 2, 1]:
 * // Pass 1: [4, 3, 2, 1, 5]
 * // Pass 2: [3, 2, 1, 4, 5]
 * // Pass 3: [2, 1, 3, 4, 5]
 * // Pass 4: [1, 2, 3, 4, 5]
 * 
 * Time Complexity: O(n²) where n is the length of the array
 * Space Complexity: O(1) as sorting is done in-place
 */
function bubbleSort(nums) {
    let size = nums.length

    for(const _ of nums) {
        let isSorted = true
        console.log({ nums })
        for(let i = 0; i < size-1; i++) {
            counter++
            if (nums[i] > nums[i+1]) {
                [nums[i+1], nums[i]] = [nums[i], nums[i+1]]
                isSorted = false
            }
        }

        if (isSorted) return

        size--
    }

    return nums
}

module.exports = { bubbleSort };
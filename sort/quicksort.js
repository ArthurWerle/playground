/**
 * Implements the Quick Sort algorithm using Lomuto partition scheme.
 * 
 * @param {number[]} arr - The array to be sorted
 * @param {number} [low=0] - The starting index of the partition
 * @param {number} [high=arr.length-1] - The ending index of the partition
 * @returns {number[]} The sorted array
 * 
 * @example
 * // For input [3, 1, 4, 1, 5, 9, 2, 6]:
 * // First partition: [1, 1, 2, 3, 5, 9, 4, 6] (pivot=6)
 * // Second partition: [1, 1, 2, 3, 4, 5, 9, 6] (pivot=3)
 * // Final result: [1, 1, 2, 3, 4, 5, 6, 9]
 * 
 * Time Complexity: O(n log n) average case, O(n²) worst case
 * Space Complexity: O(log n) due to recursion stack
 */
function quicksort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort elements before and after partition
        quicksort(arr, low, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, high);
    }
    return arr;
}

/**
 * Partitions the array using Lomuto partition scheme.
 * 
 * @param {number[]} arr - The array to partition
 * @param {number} low - The starting index of the partition
 * @param {number} high - The ending index of the partition
 * @returns {number} The index of the pivot element
 */
function partition(arr, low, high) {
    // Choose the rightmost element as pivot
    const pivot = arr[high];
    
    // Index of smaller element (indicates right position of pivot)
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    // Place pivot in correct position
    swap(arr, i + 1, high);
    return i + 1;
}

/**
 * Swaps two elements in an array.
 * 
 * @param {number[]} arr - The array containing elements to swap
 * @param {number} i - Index of first element
 * @param {number} j - Index of second element
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = { quicksort };
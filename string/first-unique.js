/**
 * Finds the index of the first non-repeating character in a string.
 * 
 * @param {string} string - The input string to search
 * @returns {number} The index of the first unique character, or -1 if none exists
 * 
 * @example
 * // For input "leetcode":
 * // Iteration 1: seen = { 'l': [0, 1] }
 * // Iteration 2: seen = { 'l': [0, 1], 'e': [1, 1] }
 * // Iteration 3: seen = { 'l': [0, 1], 'e': [1, 2] }
 * // Iteration 4: seen = { 'l': [0, 1], 'e': [1, 2], 't': [3, 1] }
 * // Iteration 5: seen = { 'l': [0, 1], 'e': [1, 2], 't': [3, 1], 'c': [4, 1] }
 * // Iteration 6: seen = { 'l': [0, 1], 'e': [1, 2], 't': [3, 1], 'c': [4, 1], 'o': [5, 1] }
 * // Iteration 7: seen = { 'l': [0, 1], 'e': [1, 2], 't': [3, 1], 'c': [4, 1], 'o': [5, 1], 'd': [6, 1] }
 * // Returns 0 as 'l' is the first character with count 1
 * 
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) where n is the number of unique characters
 */
function findUnique(string) {
    if (!string) return -1;
    
    const seen = new Map()

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (!seen.has(char)) seen.set(char, [i, 1])
        else seen.set(char, [seen.get(char)[0], seen.get(char)[1] + 1])
    }

    for (const [key, value] of seen.entries()) {
        if (value[1] === 1) return value[0]
    }

    return -1
}

module.exports = { findUnique };
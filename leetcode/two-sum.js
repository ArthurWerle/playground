function twoSum(nums, target) {
    const map = new Map()

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }

    return []
}

/** iteration tracker for  nums: [2, 7, 11, 15], target: 9, expected: [0, 1]
 * 
 * 1st iteration (i = 0):
 *      complement = 9 - 2 (nums[0]) = 7
 *      map.has(7) ? no
 *      map.set(2, 0)
 * 
 * map is now:
 *      2: 0
 * 
 * 2nd iteration (i = 1):
 *      complement = 9 - 7 (nums[1]) = 2
 *      map.has(2) ? yes
 *          return [0, 1]
 *  
 */

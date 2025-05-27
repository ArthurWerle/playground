let counter = 0

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

bubbleSort([5, 4, 3, 2, 1])
console.log({
    counter
})
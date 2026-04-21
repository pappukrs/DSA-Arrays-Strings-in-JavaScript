function moveZeroes(nums) {
    let left = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[left], nums[r]] = [nums[r], nums[left]];
            left++;
        }
    }
}
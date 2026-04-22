function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const s = nums[i] + nums[l] + nums[r];
            if (s === 0) { res.push([nums[i], nums[l], nums[r]]); l++; r--; while (nums[l] === nums[l - 1]) l++; }
            else if (s < 0) l++;
            else r--;
        }
    }
    return res;
}
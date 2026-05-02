function maxSlidingWindow(nums, k) {
    const dq = [], res = [];
    for (let i = 0; i = k - 1) res.push(nums[dq[0]]);
}
return res;
}
function subarraySum(nums, k) {
    const map = { 0: 1 };
    let count = 0, sum = 0;
    for (let n of nums) {
        sum += n;
        count += (map[sum - k] || 0);
        map[sum] = (map[sum] || 0) + 1;
    }
    return count;
}
function longestConsecutive(nums) {
    const s = new Set(nums);
    let max = 0;
    for (let n of s) {
        if (!s.has(n - 1)) {
            let cur = n, len = 1;
            while (s.has(cur + 1)) { cur++; len++; }
            max = Math.max(max, len);
        }
    }
    return max;
}
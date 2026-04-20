function containsDuplicate(nums) {
    const seen = new Set();
    for (let n of nums) {
        if (seen.has(n)) return true;
        seen.add(n);
    }
    return false;
}
function maxArea(height) {
    let l = 0, r = height.length - 1, max = 0;
    while (l < r) {
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
        height[l] < height[r] ? l++ : r--;
    }
    return max;
}
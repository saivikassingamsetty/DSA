/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;

    while (l < r) {
        max = Math.max(max, Math.min(height[r], height[l]) * (r - l));

        if (height[l] < height[r]) l++
        else r--;
    }

    return max;
};
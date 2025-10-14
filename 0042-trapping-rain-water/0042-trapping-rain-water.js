/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let leftGreater = new Array(n);
    let rightGreater = new Array(n);
    let leftMax = -1;
    let rightMax = -1;

    for (let i = 0; i < n; i++) {
        leftMax = Math.max(leftMax, height[i]);
        leftGreater[i] = leftMax;
        rightMax = Math.max(rightMax, height[n - i - 1]);
        rightGreater[n - i - 1] = rightMax;
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res += Math.min(rightGreater[i], leftGreater[i]) - height[i];
    }

    return res;
};
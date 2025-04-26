/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftGreater = new Array(height.length);
    let leftMax = -1;
    for (let i = 0; i < height.length; i++) {
        leftMax = Math.max(leftMax, height[i]);
        leftGreater[i] = leftMax;
    }

    let rightGreater = new Array(height.length);
    let rightMax = -1;
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax = Math.max(rightMax, height[i]);
        rightGreater[i] = rightMax;
    }

    let res = 0;
    for (let i = 0; i < height.length; i++) {
        res += Math.min(rightGreater[i], leftGreater[i]) - height[i];
    }

    return res;
};
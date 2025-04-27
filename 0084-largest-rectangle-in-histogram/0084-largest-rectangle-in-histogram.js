/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    
    //next smaller element to left
    let stack = [];
    let left = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) {
            left.push(stack[stack.length - 1] + 1);
        } else {
            left.push(0);
        }

        stack.push(i);
    }

    //next smaller element to right
    stack = [];
    let right = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length === 0) {
            right[i] = n - 1;
        } else {
            right[i] = stack[stack.length - 1] - 1;
        }

        stack.push(i);
    }

    //Now we know the boundaries of each cell, next smallest item index
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        maxArea = Math.max(maxArea, (right[i] - left[i] + 1) * heights[i]);
    }

    return maxArea;
};
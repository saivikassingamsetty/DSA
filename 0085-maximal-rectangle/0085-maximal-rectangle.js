const largestRectangleInHistogram = (heights) => {
    let stack = [];
    let maxArea = 0;

    let i = 0;
    while (i < heights.length) {
        if (!stack.length || heights[stack[stack.length - 1]] <= heights[i]) {
            stack.push(i++);
        } else {
            let top = stack.pop();
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, heights[top] * width);
        }
    }

    while (stack.length) {
        let top = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, heights[top] * width);
    }

    return maxArea;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let max = 0;

    height = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            height[j] = matrix[i][j] == '1' ? height[j] + 1 : 0
        }

        max = Math.max(max, largestRectangleInHistogram(height));
    }

    return max;
};
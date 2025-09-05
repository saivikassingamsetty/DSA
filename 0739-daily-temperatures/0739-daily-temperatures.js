/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // index of next greater element

    let n = temperatures.length;
    let stack = [];
    let res = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) stack.pop();
        res[i] = stack.length ? stack[stack.length - 1] - i: 0;
        stack.push(i);
    }

    return res;
};
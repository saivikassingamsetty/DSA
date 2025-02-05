/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
    if (arr.length < 3) return 0;

    //Longest increasing prefix + longest decreasing suffix

    let n = arr.length;
    let longestIncreasingPrefix = new Array(n).fill(1);
    let longestDecreasingSuffix = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            longestIncreasingPrefix[i] += longestIncreasingPrefix[i - 1]
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            longestDecreasingSuffix[i] += longestDecreasingSuffix[i + 1]
        }
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        if (longestIncreasingPrefix[i] > 1 && longestDecreasingSuffix[i] > 1) {
            max = Math.max(max, longestIncreasingPrefix[i] + longestDecreasingSuffix[i] - 1);
        }
    }

    return max;
};
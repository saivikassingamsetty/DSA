/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = nums.reduce((acc, i, index) => {
        acc.push((acc[index - 1] || 0) + i);
        return acc;
    }, []);

    let rightSum = nums.reverse().reduce((acc, i, index) => {
        acc.push((acc[index - 1] || 0) + i);
        return acc;
    }, []).reverse();

    for (let i = 0; i < nums.length; i++) {
        if ((leftSum[i-1] || 0) == (rightSum[i+1] || 0)) return i;
    }

    return -1;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    //left prefix sum
    let leftSum = nums.reduce((acc, item, index) => {
        if (index > 0) {
            acc.push(item + acc[index - 1])
        }

        return acc;
    }, [nums[0]]);

    //right prefix sum
    let rightSum = nums.reduceRight((acc, item, index) => {
        if (index < nums.length-1) {
            acc.push(item + acc.slice(-1)[0])
        }

        return acc;
    }, [nums[nums.length-1]]);
    rightSum.reverse();

    return nums.map((_, index) => Math.abs(leftSum[index] - rightSum[index]));
};
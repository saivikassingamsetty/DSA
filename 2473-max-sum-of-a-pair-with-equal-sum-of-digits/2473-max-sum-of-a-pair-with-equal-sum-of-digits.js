/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    nums.sort((a, b) => a - b);

    let sum = [];
    let s = 0;
    for (let num of nums) {
        s = 0;
        while (num > 0) {
            s += num % 10;
            num = Math.floor(num / 10);
        }
        sum.push(s);
    }

    //need rightmost index of same sum (maximum)
    let dict = {};

    let res = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let j = dict[sum[i]];
        if (!j) dict[sum[i]] = i;
        else res = Math.max(res, nums[i] + nums[j]);
    }

    return res;
};
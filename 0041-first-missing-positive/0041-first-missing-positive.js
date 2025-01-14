/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let mySet = new Set();

    for (let num of nums) if (num > 0) mySet.add(num);

    for (let i = 1; i <= 2 * nums.length; i++) if (!mySet.has(i)) return i;
};
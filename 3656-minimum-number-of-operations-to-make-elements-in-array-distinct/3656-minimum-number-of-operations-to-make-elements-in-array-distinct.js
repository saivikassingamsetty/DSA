/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let set = new Set();
    let haveDistinct = true;
    let index = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        haveDistinct &&= !set.has(nums[i]);
        if (haveDistinct) index = i;
        set.add(nums[i]);
    }

    let prevGroups = Math.ceil(index / 3);

    return prevGroups;
};
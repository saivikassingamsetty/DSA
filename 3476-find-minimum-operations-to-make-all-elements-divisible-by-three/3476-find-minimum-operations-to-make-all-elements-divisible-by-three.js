/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return (nums.filter(x => x%3 !== 0)).length;
};
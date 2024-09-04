/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0;
    let r = nums.length-1;

    while (l < r) {
        let mid = l + Math.floor((r-l)/2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) l = mid+1;
        else r = mid;
    }

    //this is where I lost, this is post processing -> checking last element
    return (nums[l] < target) ? l+1: l;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let track = new Map();
    nums.forEach(item => track.set(item, (track.get(item) || 0) + 1));

    for (const [item, count] of track) {
        if (count > Math.floor(nums.length/2)) return item;
    }

    return nums[0];
};
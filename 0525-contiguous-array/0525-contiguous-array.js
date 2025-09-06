/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let prefix = new Array(nums.length).fill(0);
    for (let i = 0; i < prefix.length; i++) {
        prefix[i] = (nums[i] == 1 ? 1 : -1) + (i > 0 ? prefix[i - 1] : 0);
    }

    let track = { 0: -1 };
    let res = 0;
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] in track) {
            res = Math.max(res, i - track[prefix[i]]);
        } else {
            track[prefix[i]] = i;
        }
    }

    return res;
};
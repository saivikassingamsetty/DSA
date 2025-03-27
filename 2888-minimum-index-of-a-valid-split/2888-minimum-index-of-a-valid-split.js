/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
    let map = {};
    let right = new Array(nums.length).fill(-1);

    //suffix sum
    for (let i = nums.length - 1; i >= 0; i--) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        map[nums[i]]++;

        if (i == nums.length - 1) {
            right[i] = nums[i];
        } else {
            if (map[right[i + 1]] > Math.floor((nums.length - i) / 2)) {
                right[i] = right[i + 1];
            } else if (map[nums[i]] > Math.floor((nums.length - i) / 2)) {
                right[i] = nums[i];
            } else {
                right[i] = -1;
            }
        }
    }

    map = {};
    let left = [];

    //prefix sum
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        map[nums[i]]++;

        let l;
        if (!left.length) {
            l = nums[i];
        } else {
            if (map[left[i - 1]] > Math.floor((i + 1) / 2)) {
                l = left[i - 1];
            } else if (map[nums[i]] > Math.floor((i + 1) / 2)) {
                l = nums[i];
            } else {
                l = -1;
            }
        }

        let r = i + 1 < nums.length ? right[i + 1] : -1;

        if (l == r) return i;
        left.push(l);
    }

    return -1;
};
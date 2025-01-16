/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let res1 = nums2.length % 2 == 1 ? nums1.reduce((a, i) => a ^ i, 0) : 0;
    let res2 = nums1.length % 2 == 1 ? nums2.reduce((a, i) => a ^ i, 0) : 0;

    return res1 ^ res2;
};
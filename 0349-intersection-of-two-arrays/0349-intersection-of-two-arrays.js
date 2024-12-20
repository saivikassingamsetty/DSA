/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let setA = new Set(nums1);
    let setB = new Set(nums2);
    let res = [];
    for (let a of setB) {
        if (setA.has(a)) res.push(a);
    }
    return res;
};
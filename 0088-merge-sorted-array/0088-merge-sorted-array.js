/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            res.push(nums1[i]);
            i++;
        } else {
            res.push(nums2[j]);
            j++;
        }
    }

    while (i < m) {
        res.push(nums1[i]);
        i++;
    }

    while (j < n) {
        res.push(nums2[j]);
        j++;
    }

    for (let i = 0; i < m + n; i++) {
        nums1[i] = res[i];
    }
};
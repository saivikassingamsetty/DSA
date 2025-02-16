/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let prev = 0;
    let current = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let total = nums1.length + nums2.length;
    let mid = Math.floor((nums1.length + nums2.length) / 2);

    while (k < total) {
        if (i < nums1.length && j < nums2.length) {
            current = nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++];
        } else if (j < nums2.length) {
            current = nums2[j++];
        } else {
            current = nums1[i++];
        }

        if (total % 2 == 0 && k == mid - 1) prev = current;
        if (k == mid) {
            if (total % 2) {
                return current;
            } else {
                return (prev + current) / 2;
            }
        }

        k++;
    }
};
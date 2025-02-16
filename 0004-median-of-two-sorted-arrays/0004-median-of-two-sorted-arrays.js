/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const sorted = (nums1, nums2) => {
        let nums3 = [];
        let i = 0;
        let j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) nums3.push(nums1[i++]);
            else nums3.push(nums2[j++]);
        }

        while (i < nums1.length) nums3.push(nums1[i++]);
        while (j < nums2.length) nums3.push(nums2[j++]);

        return nums3;
    }

    const median = (arr) => {
        let mid = Math.floor(arr.length / 2);
        return (arr.length % 2 ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2);
    }


    return median(sorted(nums1, nums2));
};
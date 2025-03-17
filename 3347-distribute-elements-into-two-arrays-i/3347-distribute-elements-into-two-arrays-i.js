/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    let nums1 = [nums[0]];
    let nums2 = [nums[1]];

    for (let num of nums.slice(2)) {
        if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
            nums1.push(num);
        } else {
            nums2.push(num);
        }
    }

    return [...nums1, ...nums2];
};
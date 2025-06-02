/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let sum = {};

    // Finding Sums
    for (let a of nums1) {
        for (let b of nums2) {
            if (!sum[a + b]) sum[a + b] = 0;
            sum[a + b]++;
        }
    }

    let res = 0;

    // Finding Complementary Sums
    for (let c of nums3) {
        for (let d of nums4) {
            if (sum[-(c + d)]) res += sum[-(c + d)];
        }
    }

    return res;
};
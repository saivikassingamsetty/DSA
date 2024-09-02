/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
    let res = 0;

    nums1.forEach(item1 => {
        nums2.forEach(item2 => {
            if (item1 % (item2 * k) == 0) res++;
        })
    });

    return res;
};
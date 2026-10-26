/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (!nums.length) return

    const pivot = nums[0];

    const left = nums.filter(i => i > pivot);
    const mid = nums.filter(i => i == pivot);
    const right = nums.filter(i => i < pivot);

    let [L, M] = [left.length, mid.length];

    if (k <= L) return findKthLargest(left, k);

    if (k > L + M) return findKthLargest(right, k - L - M);

    return mid[0];
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = nums[i] + prefixSum[i];
    }

    //prefix of i -> 0 till i-1
    const findSum = (start, end) => prefixSum[end] - prefixSum[start];

    const memo = new Map();

    const findMinMax = (start, splits) => {
        if (splits == 1) return findSum(start, n);
        if (splits > n - start) return Infinity;
        let key = start + ',' + splits;
        if (memo.has(key)) return memo.get(key);

        let minimisedMaxSum = Infinity;
        for (let i = start + 1; i <= n - (splits - 1); i++) {
            let left = findSum(start, i);
            minimisedMaxSum = Math.min(minimisedMaxSum, Math.max(left, findMinMax(i, splits - 1)));

            // if left starts growing, no need to check further
            if (left >= minimisedMaxSum) break;
        }

        memo.set(key, minimisedMaxSum);

        return memo.get(key)
    }

    return findMinMax(0, k);
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
    let n = nums.length;
    let memo = new Map();

    const findMaxJumps = (i) => {
        if (i == n - 1) return 0;

        if (memo.has(i)) return memo.get(i);

        let maxJumps = -1;

        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[j] - nums[i]) <= target) {
                let jumps = findMaxJumps(j);
                if (jumps != -1) {
                    maxJumps = Math.max(maxJumps, 1 + jumps);
                }
            }
        }

        memo.set(i, maxJumps);
        return maxJumps;
    }

    return findMaxJumps(0);
};
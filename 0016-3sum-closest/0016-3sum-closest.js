/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let res = 1e9;
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (Math.abs(total - target) < Math.abs(res - target)) {
                res = total;
            }

            if (total == target) return target;

            if (total > target) {
                k--;
            } else {
                j++;

                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
            }
        }
    }

    return res == 1e9 ? 0 : res;
}
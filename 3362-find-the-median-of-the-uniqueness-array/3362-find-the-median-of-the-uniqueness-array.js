/**
 * @param {number[]} nums
 * @return {number}
 */
var medianOfUniquenessArray = function (nums) {
    // from leetcode 992
    const countAtMostK = (k) => {
        let i = 0;
        let freqMap = new Map();
        let res = 0;
        for (let j = 0; j < nums.length; j++) {
            freqMap.set(nums[j], 1 + (freqMap.get(nums[j]) || 0));

            while (freqMap.size > k) {
                let newVal = freqMap.get(nums[i]) - 1;
                if (!newVal) {
                    freqMap.delete(nums[i]);
                } else {
                    freqMap.set(nums[i], newVal);
                }
                i++;
            }

            res += j - i + 1;
        }

        return res;
    }

    // BS to select best median
    // choosing the distinct elements it can be 1 or n
    // for each k, we count number of sub arrays count with size k and traverse
    let n = nums.length;
    let l = 1;
    let r = n;
    let total = (n * (n + 1)) / 2;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (countAtMostK(mid) * 2 >= total) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};
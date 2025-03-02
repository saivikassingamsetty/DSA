/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    let finalCounter = new Map();
    let counter = new Map();
    let n = nums.length;

    for (let i = 0; i < k; i++) {
        counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    }

    for (let i = k; i < n; i++) {
        //adds current window to counter
        for (let [key, value] of counter) {
            finalCounter.set(key, (finalCounter.get(key) || 0) + 1);
        }

        //remove old
        if (counter.get(nums[i - k]) == 1) {
            counter.delete(nums[i - k]);
        } else {
            counter.set(nums[i - k], counter.get(nums[i - k]) - 1);
        }

        //add new
        counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    }

    for (let [key, value] of counter) {
        finalCounter.set(key, (finalCounter.get(key) || 0) + 1);
    }

    let res = -1;

    for (let [key, val] of finalCounter) {
        if (val == 1 && key > res) res = key;
    }

    return res;
};

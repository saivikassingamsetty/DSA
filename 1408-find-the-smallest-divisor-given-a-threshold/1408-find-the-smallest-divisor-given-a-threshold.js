/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let l = 1;
    let r = Math.max(...nums);

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        let sum = nums.reduce((acc, i) => acc + Math.ceil(i / mid), 0);
        if (sum > threshold) l = mid + 1
        else r = mid;
    }

    return l;
};
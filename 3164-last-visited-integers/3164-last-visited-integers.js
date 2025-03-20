/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
    let ans = [];
    let seen = [];
    let k = 0;
    for (let num of nums) {
        if (num > 0) {
            k = 0;
            seen.unshift(num);
        } else {
            if (++k <= seen.length) {
                ans.push(seen[k - 1]);
            } else {
                ans.push(-1);
            }
        }
    }

    return ans;
};
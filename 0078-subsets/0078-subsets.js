/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    const backtrack = (start, path) => {
        res.push([...path]);
        if (path.length == nums.length) return;

        for (let i=start; i<nums.length; i++) {
            path.push(nums[i]);
            backtrack(i+1, path);
            path.pop();
        }
    }

    backtrack(0, []);

    return res;
};
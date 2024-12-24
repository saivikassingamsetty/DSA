/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];

    const backtrack = (start, path) => {
        res.push([...path]);
        if (path.length == nums.length) return;

        for (let i=start; i<nums.length; i++) {
            if (i > start && nums[i] == nums[i-1]) continue;

            path.push(nums[i]);
            backtrack(i+1, path);
            path.pop();
        }
    }

    nums.sort((a,b) => a-b);
    backtrack(0, []);

    return res;
};
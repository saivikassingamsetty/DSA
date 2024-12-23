/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];

    const backtrack = (start, path, sum) => {
        if (sum > target) {
            return;
        }

        if (sum == target) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, path, sum + candidates[i]);
            path.pop();
        }
    }

    backtrack(0, [], 0);

    return res;
};
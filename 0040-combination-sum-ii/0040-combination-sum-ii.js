/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
            if (i > start && candidates[i] == candidates[i-1]) continue;

            path.push(candidates[i]);
            backtrack(i+1, path, sum + candidates[i]);
            path.pop();
        }
    }

    candidates.sort((a,b) => a-b);
    backtrack(0, [], 0);
    return res;
};
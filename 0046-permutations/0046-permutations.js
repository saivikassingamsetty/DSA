/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = new Set();

    const findPermutations = (length, included) => {
        if (length == nums.length) {
            res.add([...included]);
            return;
        }

        for (let i of nums) {
            if (!included.has(i)) {
                included.add(i);
                findPermutations(length+1, included);
                included.delete(i);
            }
        }
    }

    findPermutations(0, new Set());

    return [...res];
};
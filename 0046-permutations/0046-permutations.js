/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = new Set();

    const findPermutations = (included) => {
        if (included.size == nums.length) {
            res.add([...included]);
            return;
        }

        for (let i of nums) {
            if (!included.has(i)) {
                included.add(i);
                findPermutations(included);
                included.delete(i);
            }
        }
    }

    findPermutations(new Set());

    return [...res];
};
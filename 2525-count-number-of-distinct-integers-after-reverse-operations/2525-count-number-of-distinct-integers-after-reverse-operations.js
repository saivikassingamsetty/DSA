/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let res = new Set(nums);

    for (let num of nums) {
        res.add(Number(num.toString().split('').reverse().join('')));
    }

    return res.size;
};
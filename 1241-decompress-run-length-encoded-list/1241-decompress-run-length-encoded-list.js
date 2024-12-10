/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    let freq, val;

    for (let i=0; i<nums.length; i+=2) {
        [freq, val] = [nums[i], nums[i+1]];
        res.push(...(Array.from({length: freq}, (x) => val)));
    }

    return res;
};
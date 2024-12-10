/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    let freq, val;

    for (let i=0; i<nums.length; i+=2) {
        [freq, val] = [nums[i], nums[i+1]];
        // res.push(...(Array.from({length: freq}, (x) => val)));

        for(let j=0; j<freq; j++) {
            res.push(val);
        }
    }

    return res;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = nums.filter(i => i>=0);
    let neg = nums.filter(i => i<0);
    let res = [];
    let i=0;

    while(i<pos.length && i<neg.length) {
        res.push(pos[i], neg[i]);
        i++;
    }

    return res;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    //why length? because we are ensuring that nums[i] must be below that incase 
    //populating in qb+r form and nums[nums[i]] is not in qb+r form,

    let q = nums.length;

    for (let i=0; i<nums.length; i++) {
        //current
        let r = nums[i];
        //get prev value from nums[nums[i]] and update current in qb+r
        let b = nums[nums[i]]%q;

        nums[i] = b*q + r;
    }

    return nums.map(i => Math.floor(i/q));
};
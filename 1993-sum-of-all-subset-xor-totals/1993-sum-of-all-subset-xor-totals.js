/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let res = 0;

    function findSum(i, sum) {
        if (i === nums.length) {
            res += sum;
            return;
        }

        //include
        findSum(i+1, sum^nums[i]);

        //exclude
        findSum(i+1, sum);
    }

    findSum(0, 0);

    return res;
};
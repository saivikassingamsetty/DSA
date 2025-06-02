/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    //using 3 pointer, but its hard to manage so we will fix one
    //algo: for each item, we will find other 2 inbetween (i+1, n) using 2 pointer such that sum is 0
    //Main thing to take care is skip the duplicates when encounter one
    //as we sorted at first, at each iteration in 2 pointer is sum is greater than 0
    //we will move k backward
    //else we will move j forward
    //if we found sum 0, we will track the result

    for (let i = 0; i < nums.length; i++) {
        //skip duplicates
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        //for valid i
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];
            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                //valid triplet
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                
                //to skip duplicates
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
            }
        }
    }

    return res;
};
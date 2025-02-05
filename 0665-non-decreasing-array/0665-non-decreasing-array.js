/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;

            if (count > 1) return false;

            //for the first finding
            //lower nums[i]
            if (i == 0 || nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i + 1];
            } else { //raise nums[i+1]
                nums[i + 1] = nums[i];
            }
        }
    }

    return true;
};
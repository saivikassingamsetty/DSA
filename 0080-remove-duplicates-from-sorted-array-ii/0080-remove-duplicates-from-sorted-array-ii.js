/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let dupAllowed = true;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] == nums[j-1]) {
            //First duplicate
            if (dupAllowed) {
                nums[i++] = nums[j];
                dupAllowed = false;
            }
        } 
        // Unique
        else {
            nums[i++] = nums[j];
            dupAllowed = true;
        }
    }

    return i;
};
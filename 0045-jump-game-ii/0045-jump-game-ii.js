/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let maxJump = 0;
    let nextMaxJump = 0;
    let count = 0;

    for (let i = 0; i < nums.length-1; i++) {
        //at each position track max node which can be reachable from that point
        nextMaxJump = Math.max(nextMaxJump, i + nums[i]);

        //if we are done finalising next step, jump to available next max jump and find the next max jump
        if (i == maxJump) {
            count++;
            maxJump = nextMaxJump;
        }
    }

    return count;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    //calculate xor result
    let res = nums.reduce((acc, item) => acc ^ item, 0);
    // let binRes = res.toString(2);
    // let binK = k.toString(2);

    let count = 0;
    while(k || res) {
        //comparing last bits
        if (k%2 != res%2) count++;

        //removing last bits (compared)
        k = Math.floor(k/2);
        res = Math.floor(res/2);
    }

    return count;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let a = new Set();
    for (let num of nums) {
        if (a.has(num)) return num;
        a.add(num);
    }
};
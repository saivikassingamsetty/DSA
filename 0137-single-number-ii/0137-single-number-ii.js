/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let seen_once = 0;
    let seen_twice = 0;

    for (let num of nums) {
        seen_once = (seen_once ^ num) & ~seen_twice;
        seen_twice = (seen_twice ^ num) & ~seen_once;
    }

    return seen_once;
};
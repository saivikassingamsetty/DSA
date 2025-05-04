/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    candidate1 = null;
    candidate2 = null;
    count1 = 0;
    count2 = 0;

    for (let c of nums) {
        if (candidate1 == c) count1++
        else if (candidate2 == c) count2++
        else if (!count1) {
            candidate1 = c;
            count1 = 1;
        } else if (!count2) {
            candidate2 = c;
            count2 = 1;
        }

        else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num == candidate1) count1++;
        if (num == candidate2) count2++;
    }

    let res = [];
    if (count1 > Math.floor(nums.length / 3)) res.push(candidate1);
    if (count2 > Math.floor(nums.length / 3)) res.push(candidate2);

    return res;
};
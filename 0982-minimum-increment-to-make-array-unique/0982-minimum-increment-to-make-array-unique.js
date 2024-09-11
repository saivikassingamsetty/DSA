/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    nums.sort((a, b) => a - b);

    // let count = new Map();
    // count.set(nums[0], 1);

    // for (let i of nums) count.set(i, (count.get(i) || 0)+1);

    // let copy = Array.from(count);

    // let min = 0;
    // let res = 0;

    // for (let i=0; i<copy.length; i++) {
    //     let [item, itemCount] = copy[i];

    //     res += (min+1)*itemCount + Math.floor(itemCount*(itemCount-1)/2);

    //     min = item + itemCount - 1;
    // }

    let res = 0;

    for (let i = 1; i < nums.length; i++) {
        let newVal = Math.max(nums[i - 1] + 1, nums[i]);
        res += (newVal - nums[i]);
        nums[i] = newVal;
    }

    return res;
};
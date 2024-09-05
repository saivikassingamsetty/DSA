/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let counter = new Map();
    for (let i of nums) counter.set(i, (counter.get(i) || 0) + 1);

    let max = 0;
    let num = -1;

    for (let [item, count] of counter) {
        if (item % 2 == 0) {
            if (count > max) {
                max = count;
                num = item;
            } else if (count == max && item < num) {
                num = item;
            }
        }
    }

    return num;
};
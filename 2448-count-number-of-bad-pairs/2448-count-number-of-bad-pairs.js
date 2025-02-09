/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let diffArray = nums.map((item, index) => item - index);
    let map = new Map();
    let goodPairs = 0;
    let n = diffArray.length;

    for (let i = n - 1; i >= 0; i--) {
        if (map.has(diffArray[i])) {
            goodPairs += map.get(diffArray[i]);
            map.set(diffArray[i], map.get(diffArray[i]) + 1);
        } else {
            map.set(diffArray[i], 1);
        }
    }

    let totalPairs = Math.floor((n * (n - 1)) / 2);
    return totalPairs - goodPairs;
};
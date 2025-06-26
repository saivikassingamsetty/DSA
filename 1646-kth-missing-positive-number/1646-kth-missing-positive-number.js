/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let miss = 0;

    for (let i = 0; i < arr.length; i++) {
        let m = arr[i] - (arr[i - 1] ?? 0) - 1;
        if (miss + m >= k) {
            return (arr[i - 1] ?? 0) + (k - miss);
        }

        miss += m;
    }

    return arr[arr.length - 1] + (k - miss);
};
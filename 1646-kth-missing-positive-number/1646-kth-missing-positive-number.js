/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    //edge case 1 if k < first elem
    if (k < arr[0]) return k

    //edge case 2 if k > last elem
    if (k > (arr[arr.length - 1] - arr.length)) return k + arr.length;

    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);
        const missingAtMid = arr[mid] - (mid + 1);
        if (missingAtMid >= k) r = mid - 1
        else l = mid
    }

    const missingLeft = arr[l] - (l + 1);
    return arr[l] + (k - missingLeft);
};  
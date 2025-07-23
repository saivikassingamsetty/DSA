/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] > arr[mid + 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
};
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    let dict = new Set();
    let i = 1;
    while (i <= 10 ** 7) {
        dict.add(i);
        i *= 3;
    }
    let copy = [...dict];

    const findLessOrEqual = (num, arr) => {
        let l = 0;
        let r = arr.length - 1;
        closest = 0;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] == num) {
                return num;
            } else if (arr[mid] < num) {
                closest = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        if (arr[closest] <= num) return arr[closest];

        return 0;
    }

    while (n) {
        let f = findLessOrEqual(n, [...dict]);
        if (!f) return false;
        n -= f;
        dict.delete(f);
    }

    return true;
};
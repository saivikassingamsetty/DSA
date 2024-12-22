/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
    nums.sort((a, b) => a - b);
    let pL = [];
    let pR = [];

    for (let i = 0; i < nums.length; i++) {
        pL[i] = (pL[i - 1] || 0) + nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        pR[i] = (pR[i + 1] || 0) + nums[i];
    }

    const binarySearch = (target) => {
        let l = 0;
        let r = nums.length;
        let left = -1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] == target) {
                r = mid - 1;
            }
            else if (nums[mid] < target) {
                left = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        l = 0;
        r = nums.length;
        let right = nums.length;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] == target) {
                l = mid + 1;
            }
            else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                right = mid;
                r = mid - 1;
            }
        }

        return [left, right];
    }

    let res = [];
    for (let q of queries) {
        let val = 0;
        let [left, right] = binarySearch(q);
        if (left >= 0) {
            val += (left + 1) * q - pL[left];
        }
        if (right < nums.length) {
            val += pR[right] - (nums.length - right) * q;
        }

        res.push(val);
    }

    return res;
};
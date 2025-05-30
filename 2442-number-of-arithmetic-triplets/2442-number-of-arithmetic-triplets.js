/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    let res = 0;

    let binarySearch = (target, start, end) => {
        if (start < 0 || end >= nums.length) return false;

        let low = start;
        let high = end;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (nums[mid] == target) return true;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }

        return false;
    }

    let set = new Set(nums);

    for (let num of nums) {
        // if (binarySearch(nums[i] - diff, 0, i - 1) && binarySearch(nums[i] + diff, i + 1, nums.length - 1)) {
        //     res++;
        // }
        if (set.has(num - diff) && set.has(num + diff)) res++;
    }

    return res;

    

};
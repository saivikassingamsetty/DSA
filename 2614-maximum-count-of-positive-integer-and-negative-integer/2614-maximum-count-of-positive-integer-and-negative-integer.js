/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let lastNeg = low = 0;
    let fisrtPos = high = nums.length - 1;

    const binarySearchRight = (target, isPos) => {
        let low = 0;
        let high = nums.length;
        let res = -1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            //found a element smaller than target
            if (nums[mid] <= target) {
                //track it
                res = mid;
                low = mid + 1;
            }
            else high = mid - 1;
        }

        return res;
    }

    const binarySearchLeft = (target, isPos) => {
        let low = 0;
        let high = nums.length;
        let res = -1;

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            //found a element larger than target
            if (nums[mid] >= target) {
                //track it
                res = mid;
                high = mid - 1;
            }
            else low = mid + 1;
        }

        return res;
    }

    const leftMostPositiveIndex = binarySearchLeft(1);
    const rightMostNegativeIndex = binarySearchRight(-1);
    const negativeCount = rightMostNegativeIndex == -1 ? 0 : rightMostNegativeIndex + 1;
    const positiveCount = leftMostPositiveIndex == -1 ? 0 : nums.length - leftMostPositiveIndex;

    return Math.max(negativeCount, positiveCount);
};
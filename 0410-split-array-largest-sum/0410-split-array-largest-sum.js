var splitArray = function (nums, k) {
    let left = Math.max(...nums), right = nums.reduce((a, b) => a + b, 0);

    function canSplit(maxSum) {
        let parts = 1, currSum = 0;
        for (const n of nums) {
            if (currSum + n > maxSum) {
                parts += 1;
                currSum = n;
            } else {
                currSum += n;
            }
        }
        return parts <= k;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canSplit(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
};

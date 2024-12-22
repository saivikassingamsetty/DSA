/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        //except first, skip duplicates
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {
            //except first, skip duplicates
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;

            //2 pointer to solve 2 Sum
            let k = j + 1;
            let l = n - 1;

            while (k < l) {
                let total = nums[i] + nums[j] + nums[k] + nums[l];
                if (total > target) {
                    l--;
                } else if (total < target) {
                    k++;
                } else {
                    //valid quadruplet
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;

                    while (k < l && nums[k] == nums[k - 1]) {
                        k++;
                    }
                }
            }
        }
    }

    return res;
};
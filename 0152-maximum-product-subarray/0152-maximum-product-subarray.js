/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let minimumProduct = nums[0];
    let maximumProduct = nums[0];
    let ans = nums[0];
    //used for temporary
    let x, y;

    for (let num of nums.slice(1)) {
        x = Math.max(num, maximumProduct * num, minimumProduct * num);
        y = Math.min(num, minimumProduct * num, maximumProduct * num);
        [maximumProduct, minimumProduct] = [x, y]
        ans = Math.max(ans, maximumProduct);
    }

    return ans;
};
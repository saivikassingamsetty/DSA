/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let forwardProduct = 1;
    let backwardProduct = 1;
    let maximumProduct = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (forwardProduct == 0) forwardProduct = 1;
        if (backwardProduct == 0) backwardProduct = 1;

        forwardProduct *= nums[i];
        backwardProduct *= nums[nums.length - 1 - i];
        maximumProduct = Math.max(maximumProduct, forwardProduct, backwardProduct)
    }

    return maximumProduct;
};
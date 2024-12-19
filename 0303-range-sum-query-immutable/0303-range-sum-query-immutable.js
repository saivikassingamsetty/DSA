/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.array = nums;
    this.prefixArray = nums.reduce((a, i) => {
        return [...a, (a[a.length - 1] || 0) + i]
    }, []);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixArray[right] - (this.prefixArray[left] - this.array[left]);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
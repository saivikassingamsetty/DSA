/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    //travserse from back
    //pop till we find an element that is greater than current element
    //that is the next greater element for that element
    //we push the current element to the stack
    //repeat the process

    let stack = [];
    let map = new Map();
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && nums2[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1)
        stack.push(nums2[i]);
    }

    return nums1.map(i => map.get(i));
};
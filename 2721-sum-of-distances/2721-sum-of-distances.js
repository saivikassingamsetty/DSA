/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let sumL = {}, sumR = {}, cntL = {}, cntR = {};
    let res = new Array(nums.length).fill(0);

    // (i3-i0) + (i3-i1) + (i3-i3) + (i5-i3) + (i6-i3)

    // populating and calculating partial res using the left sum 3*i3 - (i0 + i1 + i3)
    for (let i = 0; i < nums.length; i++) {
        if (sumL[nums[i]] === undefined) {
            sumL[nums[i]] = 0;
            cntL[nums[i]] = 0;
        }
        res[i] = cntL[nums[i]] * i - sumL[nums[i]];
        sumL[nums[i]] += i;
        cntL[nums[i]]++;
    }

    // populating and calculating partial res using the right sum (i5 + i6) - 2*i3
    for (let i = nums.length - 1; i >= 0; i--) {
        if (sumR[nums[i]] === undefined) {
            sumR[nums[i]] = 0;
            cntR[nums[i]] = 0;
        }
        res[i] += sumR[nums[i]] - cntR[nums[i]] * i;
        sumR[nums[i]] += i;
        cntR[nums[i]]++;
    }

    return res;
};

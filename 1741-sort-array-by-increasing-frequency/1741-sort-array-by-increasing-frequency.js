/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    //using JS
    const freq = new Map();
    nums.forEach(item => (freq.set(item, (freq.get(item) || 0) + 1)));

    return nums.sort((a,b) => {
        if (freq.get(a) > freq.get(b)) return 1;
        else if (freq.get(a) < freq.get(b)) return -1;
        else {
            if (a > b) return -1;
            return 1;
        } 
    })
};
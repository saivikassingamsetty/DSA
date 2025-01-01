/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const dp = new Map();

    const minJumps = (i) => {
        if (i == nums.length - 1) return 0;

        if (dp.has(i)) return dp.get(i);

        let minimumJumps = 1e9;
        for (let nextPos = i + 1; nextPos <= i + nums[i] && nextPos < nums.length; nextPos++) {
            minimumJumps = Math.min(minimumJumps, 1 + minJumps(nextPos))
        }

        dp.set(i, minimumJumps);
        return minimumJumps;
    }

    return minJumps(0);
};
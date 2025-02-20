/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let set = new Set(nums);
    let n = nums[0].length;

    const dfs = (str) => {
        if (str.length == n) {
            if (!set.has(str)) return str;
            return '';
        }

        return dfs(str + '0') || dfs(str + '1');
    }

    return dfs('');
};
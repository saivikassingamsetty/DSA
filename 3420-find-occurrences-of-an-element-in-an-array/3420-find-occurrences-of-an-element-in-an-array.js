/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
    let ids = [];
    for (let i = 0; i < nums.length; i++) if (nums[i] == x) ids.push(i);

    return queries.map(query => query <= ids.length ? ids[query - 1] : -1);
};
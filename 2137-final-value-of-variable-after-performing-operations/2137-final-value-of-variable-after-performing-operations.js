/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((res, item) => {
        if (item.includes('--')) res--;
        else res++;
        return res;
    }, 0);
};
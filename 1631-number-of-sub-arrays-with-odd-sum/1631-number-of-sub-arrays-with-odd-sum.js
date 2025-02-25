/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    //considering the beginning!
    let evenSum = 1;
    let oddSum = 0;
    let cummSum = 0;
    let res = 0;
    let MOD = 1e9 + 7

    for (let i = 0; i < arr.length; i++) {
        cummSum += arr[i];
        if (cummSum % 2) {
            res = (res + evenSum) % MOD;
            oddSum++;
        } else {
            res = (res + oddSum) % MOD;
            evenSum++;
        }
    }

    return res;
};
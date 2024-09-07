/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let count = {};
    let lastGarbage = {}

    garbage.forEach((item, index) => {
        for (let ch of item) {
            count[ch] = (count[ch] || 0) + 1;
            lastGarbage[ch] = index;
        };
    });

    let prefixSum = [0];
    for (let i=1; i<=travel.length; i++) {
        prefixSum.push(travel[i-1] + prefixSum[i-1]);
    }

    let res = 0;
    for (let [type, c] of Object.entries(count)) {
        if (c != 0) res += (prefixSum[lastGarbage[type]] + c);
    }

    return res;
};
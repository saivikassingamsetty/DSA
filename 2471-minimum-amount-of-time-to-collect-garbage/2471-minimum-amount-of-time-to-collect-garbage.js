/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let lastGarbage = {};
    let totalCount = 0;

    garbage.forEach((item, index) => {
        for (let ch of item) {
            lastGarbage[ch] = index;
            totalCount++;
        };
    });

    let prefixSum = [0];
    for (let i=1; i<=travel.length; i++) {
        prefixSum.push(travel[i-1] + prefixSum[i-1]);
    }

    let totalTime = 0;
    for (let type of ['M', 'G', 'P']) {
        if (lastGarbage[type]) totalTime += prefixSum[lastGarbage[type]];
    }

    return totalTime + totalCount;
};
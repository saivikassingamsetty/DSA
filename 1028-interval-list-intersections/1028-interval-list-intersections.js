/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < firstList.length && j < secondList.length) {
        //finding the edges
        let [aStart, aEnd] = firstList[i];
        let [bStart, bEnd] = secondList[j];

        // Step 1: track overlapping range
        //Cross Locking one
        if (aStart <= bEnd && bStart <= aEnd) {
            res.push([Math.max(aStart, bStart), Math.min(aEnd, bEnd)]);
        }

        //Step: 2: Update pointers
        if (aEnd <= bEnd) {
            i++
        } else {
            j++;
        }
    }

    return res;
};
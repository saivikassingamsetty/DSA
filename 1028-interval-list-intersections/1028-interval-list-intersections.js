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
        let start = Math.max(firstList[i][0], secondList[j][0]);
		let end = Math.min(firstList[i][1], secondList[j][1]);

        //Based on start and end
        if (start <= end) res.push([start, end]);

        //Step: 2: Update pointers
        //if firstList[i][1] is smaller
        if (end == firstList[i][1]) {
            i++
        } else {
            j++;
        }
    }

    return res;
};
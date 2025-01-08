/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
    let sumL = {}; countL = {}; countR = {}; sumR = {};
    let res = new Array(arr.length).fill(0);

    //Calculating abs sum for the duplicates on left
    for (let i = 0; i < arr.length; i++) {
        if (sumL[arr[i]] == undefined) {
            sumL[arr[i]] = 0;
            countL[arr[i]] = 0;
        }

        //calculating left res
        res[i] = countL[arr[i]] * i - sumL[arr[i]];

        //calculting prefix sum of same values
        sumL[arr[i]] += i;

        //calculating frequency
        countL[arr[i]]++;
    }

    //Calculating abs sum for the duplicates on right
    for (let i = arr.length - 1; i >= 0; i--) {
        if (sumR[arr[i]] == undefined) {
            sumR[arr[i]] = 0;
            countR[arr[i]] = 0;
        }

        //calculating right res
        res[i] += sumR[arr[i]] - countR[arr[i]] * i;

        //calculting prefix sum of same values
        sumR[arr[i]] += i;

        //calculating frequency
        countR[arr[i]]++;
    }

    return res;
};
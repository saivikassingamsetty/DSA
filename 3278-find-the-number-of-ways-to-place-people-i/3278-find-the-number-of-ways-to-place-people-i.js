/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
    // //sorting the points such that first by x value in asc but y in desc
    points.sort((a, b) => {
        if (a[0] == b[0]) {
            if (a[1] < b[1]) {
                return 1;
            } else {
                return -1;
            }
        } else if (a[0] > b[0]) return 1;

        return -1;
    });

    let res = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let uL = points[i];
            let lR = points[j];

            if (uL[0] <= lR[0] && uL[1] >= lR[1]) {
                let isValidPair = true;
                for (let k = i + 1; k < j; k++) {
                    if ((uL[0] <= points[k][0] && points[k][0] <= lR[0]) &&
                        (uL[1] >= points[k][1] && points[k][1] >= lR[1])) {
                        isValidPair = false;
                    }
                }
                if (isValidPair) res++;
            }
        }
    }

    return res;
};
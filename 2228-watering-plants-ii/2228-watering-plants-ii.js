/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
    let i = 0;
    let j = plants.length - 1;
    let refillCount = 0;
    let capA = capacityA;
    let capB = capacityB;

    while (i < j) {
        if (plants[i] > capA) {
            refillCount++;
            capA = capacityA;
        }

        if (plants[j] > capB) {
            refillCount++;
            capB = capacityB;
        }

        capA -= plants[i++];
        capB -= plants[j--];
    }

    if (i == j) {
        if (capA < capB) {
            if (plants[i] > capB) refillCount++;
        } else {
            if (plants[i] > capA) refillCount++;
        }
    }

    return refillCount;
};
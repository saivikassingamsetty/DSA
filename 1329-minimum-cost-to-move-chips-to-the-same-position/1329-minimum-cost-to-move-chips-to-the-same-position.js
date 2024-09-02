/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let uniquePositions = [...new Set(position)];
    let minCost = 1e9;

    //for each position
    for (let pos of uniquePositions) {
        let cost = 0;

        //iterate over every chip to calculate cost
        for (let chipPos of position) {
            cost += Math.abs(pos - chipPos) % 2
        }

        minCost = Math.min(cost, minCost);
    }

    return minCost;
};
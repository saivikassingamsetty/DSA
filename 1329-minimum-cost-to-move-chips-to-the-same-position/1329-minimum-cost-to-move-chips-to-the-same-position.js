/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let minCost = 1e9;

    //for each position
    for (let [index, pos] of Object.entries(position)) {
        if (index > 0 && pos == position[index-1]) continue;
        
        let cost = 0;

        //iterate over every chip to calculate cost
        for (let chipPos of position) {
            cost += Math.abs(pos - chipPos) % 2
        }

        minCost = Math.min(cost, minCost);
    }

    return minCost;
};
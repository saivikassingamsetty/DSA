/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    houses.sort((a,b) => a-b);
    heaters.sort((a,b) => a-b);

    const minDistanceToHeater = (h) => {
        let low = 0;
        let high = heaters.length - 1;
        let closestSmaller = heaters[0];
        let closestBigger = heaters[heaters.length-1];

        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);

            if (heaters[mid] == h) {
                closestSmaller = heaters[mid];
                closestBigger = heaters[mid];
                break
            } else if (heaters[mid] > h) {
                closestBigger = heaters[mid];
                high = mid - 1;
            } else {
                closestSmaller = heaters[mid];
                low = mid + 1;
            };
        }   

        //return distance to closest heater
        return Math.min(Math.abs(h - closestBigger), Math.abs(h - closestSmaller));
    }

    let res = 0;
    for (let house of houses) {
        res = Math.max(res, minDistanceToHeater(house));
    }

    return res;
};
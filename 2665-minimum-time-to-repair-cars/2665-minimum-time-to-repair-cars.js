/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
    const canRepair = (time) => {
        //count how many cars they can repair parallely as we know the time
        return ranks.reduce((acc, i) => acc + Math.floor(Math.sqrt(time / i)), 0) >= cars;
    }

    let l = 1;
    let r = Math.max(...ranks) * cars * cars;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (canRepair(mid)) r = mid
        else l = mid + 1
    }

    return l;
};
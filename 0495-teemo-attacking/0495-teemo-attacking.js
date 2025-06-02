/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let lastTime = -1;
    let totalTime = 0;

    for (let time of timeSeries) {
        //merge intervals
        if (time <= lastTime) {
            totalTime += time + duration - 1 - lastTime;
        } else {
            totalTime += duration;
        }

        lastTime = time + duration - 1;
    }

    return totalTime;
};
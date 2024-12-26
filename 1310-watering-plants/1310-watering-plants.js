/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let waterCan = capacity;

    for (let i=0; i<plants.length; i++) {
        //if plant requires more
        if (plants[i] > waterCan) {
            //go back & come again
            steps += i + i;
            //refill
            waterCan = capacity;
        }
        //water the plant
        waterCan -= plants[i];
        steps++;
    }

    return steps;
};
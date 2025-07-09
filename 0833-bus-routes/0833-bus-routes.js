/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source == target) return 0;

    let buses = {};

    for (let i = 0; i < routes.length; i++) {
        for (let stop of routes[i]) {
            if (!buses[stop]) buses[stop] = [];
            buses[stop].push(i);
        }
    }

    if (!buses[source] || !buses[target]) return -1;

    let queue = new Queue();
    let visitedBuses = new Set();

    for (let bus of buses[source]) {
        queue.enqueue([bus, 1]);
        visitedBuses.add(bus);
    }

    while (queue.size()) {
        let [bus, busCount] = queue.dequeue();

        for (let stop of routes[bus]) {
            //if target stop achievable through current bus
            if (stop == target) return busCount;

            // else explore next buses at the stop
            for (let nextBus of buses[stop]) {
                if (!visitedBuses.has(nextBus)) {
                    queue.enqueue([nextBus, busCount + 1]);
                    visitedBuses.add(nextBus);
                }
            }
        }
    }

    return -1;
};
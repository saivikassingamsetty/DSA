/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const dependencyMap = {};
    const indegree = new Array(numCourses).fill(0);

    for (let [courseA, courseB] of prerequisites) {
        if (!dependencyMap[courseB]) dependencyMap[courseB] = [];
        dependencyMap[courseB].push(courseA);
        indegree[courseA]++;
    }

    let queue = new Queue();
    for (let i = 0; i < numCourses; i++) {
        if (!indegree[i]) queue.enqueue(i);
    }

    let vis = 0;
    while (queue.size()) {
        let node = queue.dequeue();
        vis++;
        for (let nextNode of dependencyMap[node] || []) {
            indegree[nextNode]--;
            if (!indegree[nextNode]) queue.enqueue(nextNode);
        }
    }

    return vis == numCourses;
};
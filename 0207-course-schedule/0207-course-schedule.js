/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const prereqMap = {};

    for (let [courseA, courseB] of prerequisites) {
        if (!prereqMap[courseA]) prereqMap[courseA] = [];
        prereqMap[courseA].push(courseB);
    }

    const vis = new Set();
    const safe = new Set();

    // Detect cycle in Directed Graph
    const hasCycle = (node) => {
        if (safe.has(node)) return false;
        if (vis.has(node)) return true;
        vis.add(node);

        for (let nextNode of prereqMap[node] || []) {
            if (hasCycle(nextNode)) return true;
        }

        vis.delete(node);
        safe.add(node);
        return false;
    }


    for (let course = 0; course < numCourses; course++) {
        if (!vis.has(course) && hasCycle(course)) return false;
    }

    return true;
};
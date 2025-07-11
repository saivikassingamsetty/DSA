/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
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

    let courses = [];
    while (queue.size()) {
        let node = queue.dequeue();
        courses.push(node);
        for (let nextNode of dependencyMap[node] || []) {
            indegree[nextNode]--;
            if (!indegree[nextNode]) queue.enqueue(nextNode);
        }
    }

    return courses.length == numCourses ? courses: [];
};
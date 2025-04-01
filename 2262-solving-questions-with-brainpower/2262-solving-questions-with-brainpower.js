/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const dp = new Array(questions.length).fill(-1);

    findMaxPoints = (i) => {
        if (i >= questions.length) return 0;

        if (dp[i] === -1) {
            const choose = questions[i][0] + findMaxPoints(i + 1 + questions[i][1]);
            const skip = findMaxPoints(i + 1);
            dp[i] = Math.max(choose, skip);
        }

        return dp[i];
    }

    return findMaxPoints(0);
};
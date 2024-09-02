/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    //with JS in-built
    // return score.sort((a,b) => b[k] - a[k]);

    //Without in-built
    for (let i = 0; i<score.length; i++) {
        let maxScore = score[i][k];
        let maxStud = i;

        for (let j = i+1; j < score.length; j++) {
            if (maxScore < score[j][k]) {
                maxScore = score[j][k];
                maxStud = j;
            }
        }

        //swapping the first with max
        [score[i], score[maxStud]] = [score[maxStud], score[i]];
    }

    return score;
};
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let isLost = new Array(n).fill(false);
    let peopleRemained = n;
    let i = 0;

    while (peopleRemained > 1) {
        let distance = k - 1;

        while (distance) {
            i = (i+1)%n;
            if (!isLost[i]) distance--;
        }

        isLost[i] = true;
        peopleRemained--;
        i = (i+1)%n;

        //find next active member
        while (isLost[i]) {
            i = (i+1)%n;
        } 
    }

    return (i+1)%(n+1);
};
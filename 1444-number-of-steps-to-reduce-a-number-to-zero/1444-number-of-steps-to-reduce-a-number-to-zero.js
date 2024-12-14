/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;

    while (num) {
        if (num%2) num--;
        else num /= 2;
        steps++;
    }

    return steps;
};
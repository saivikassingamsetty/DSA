/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let i = 0;
    let j = 0;

    for (let command of commands) {
        if (command == 'RIGHT') j++;
        if (command == 'LEFT') j--;
        if (command == 'UP') i--;
        if (command == 'DOWN') i++;
    }

    return i*n+j;
};
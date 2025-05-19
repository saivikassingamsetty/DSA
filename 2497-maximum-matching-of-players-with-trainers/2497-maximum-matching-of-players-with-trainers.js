/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((x, y) => x - y);
    trainers.sort((x, y) => x - y);

    let i = 0;
    let j = 0;
    let res = 0;

    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            i++;
            res++;
        }

        j++;
    }

    return res;
};
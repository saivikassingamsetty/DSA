/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
    // let cache = new Map();

    // const findMinMoves = (value, doubles) => {
    //     console.log(value, doubles)
    //     if (value == target) return 0;

    //     if (cache.has(`${value} ${doubles}`)) return cache.get(`${value} ${doubles}`);

    //     let a = value+1 <= target ? findMinMoves(value + 1, doubles): 1e9;
    //     let b = value*2 <= target && doubles ? findMinMoves(value * 2, doubles - 1): 1e9;
    //     let res = 1 + Math.min(a, b);
    //     cache.set(`${value} ${doubles}`, res);

    //     return res;
    // }

    // console.log(cache)
    // return findMinMoves(1, maxDoubles);

    let moves = 0;

    while (target > 1 && maxDoubles) {
        if (target % 2) target--
        else {
            target /= 2;
            maxDoubles--;
        }

        moves++;
    }

    return moves + (target - 1);
};
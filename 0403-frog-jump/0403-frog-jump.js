/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    let n = stones.length;
    let memo = new Map();

    const frogCanCross = (pos, jump, stonePos) => {
        if (stonePos == n - 1) return true;

        let key = `${pos},${jump},${stonePos}`;

        if (memo.has(key)) return memo.get(key);

        for (let i = stonePos + 1; i < n; i++) {
            //first stone
            if (stonePos == 0) {
                if (pos + jump == stones[i] && frogCanCross(stones[i], jump, i)) {
                    memo.set(key, true);
                    return true;
                }

                memo.set(key, false);
                return false;
            }

            //later stones
            for (let k = -1; k <= 1; k++) {
                if (pos + jump + k == stones[i] && frogCanCross(stones[i], jump + k, i)) {
                    memo.set(key, true);
                    return true;
                }
            }
        }

        memo.set(key, false);
        return false;
    }

    return frogCanCross(0, 1, 0);
};
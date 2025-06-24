/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
    const canCompleteJourney = (maxJump) => {
        const n = stones.length;
        const available = new Array(n).fill(true);

        // Forward journey
        let current = 0;
        while (current < n - 1) {
            let nextPos = -1;
            for (let i = current + 1; i < n; i++) {
                if (stones[i] - stones[current] > maxJump) break;
                nextPos = i;
            }

            if (nextPos === -1) return false;

            available[nextPos] = false;
            current = nextPos;
        }

        // Return journey
        current = n - 1;
        while (current > 0) {
            let nextPos = -1;
            for (let i = current - 1; i >= 0; i--) {
                if (stones[current] - stones[i] > maxJump) break;
                if (available[i]) {
                    nextPos = i;
                    break;
                }
            }

            if (nextPos === -1) return false;
            current = nextPos;
        }

        return true;
    };

    let left = 1;
    let right = stones[stones.length - 1];

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canCompleteJourney(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

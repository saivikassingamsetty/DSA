/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    
    let freq = {};
    for (let num of hand) freq[num] = (freq[num] || 0) + 1;
    
    let newHand = [...new Set(hand)].sort((a, b) => a - b); // Sort numerically!
    
    for (let num of newHand) {
        while (freq[num] > 0) {
            // For every group starting at num
            for (let k = 0; k < groupSize; k++) {
                let nextNum = num + k;
                if (!freq[nextNum] || freq[nextNum] === 0) return false;
                freq[nextNum] -= 1;
            }
        }
    }
    
    return true;
};

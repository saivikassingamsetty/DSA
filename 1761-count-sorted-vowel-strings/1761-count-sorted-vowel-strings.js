/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
    const vowels = 'aeiou';
    let dp = Array.from({length: 5}, () => new Array(n).fill(0));

    function count(startIndex, length) {
        //if reached target length
        if (length == n) return 1;

        //if index exceeds required length
        if (startIndex >= 5) return 0;

        if (dp[startIndex][length]) return dp[startIndex][length];

        //for each position there are 2 ways, either we pick it or we skip it
        //pick it
        // duplicates are allowed so dont need to increment even we include
        const pickCount = count(startIndex, length + 1);

        //skip it
        const skipCount = count(startIndex + 1, length);

        dp[startIndex][length] = pickCount + skipCount;

        return dp[startIndex][length];
    }

    return count(0, 0);
};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // Use memoization to avoid redundant calculations
    const memo = {};
    
    const solve = (i, j) => {
        // Create a unique key for memoization
        const key = `${i},${j}`;
        if (key in memo) return memo[key];
        
        // If we've processed all characters in word1
        if (i === word1.length) {
            return word2.length - j; // Insert all remaining characters from word2
        }
        
        // If we've processed all characters in word2
        if (j === word2.length) {
            return word1.length - i; // Delete all remaining characters from word1
        }
        
        // If characters match, no operation needed
        if (word1[i] === word2[j]) {
            return memo[key] = solve(i + 1, j + 1);
        } else {
            // Try all three operations and take the minimum
            return memo[key] = 1 + Math.min(
                solve(i, j + 1),     // Insert
                solve(i + 1, j),     // Delete
                solve(i + 1, j + 1)  // Replace
            );
        }
    };
    
    return solve(0, 0);
};

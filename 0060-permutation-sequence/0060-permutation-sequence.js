/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let res = '';
    let counter = 1;

    const findPermutations = (included) => {
        if (included.size == n) {
            if (counter < k) {
                counter++;
            } else {
                res = [...included].join('');
            }
        }

        for (let i = 1; i <= n; i++) {
            if (!included.has(i)) {
                included.add(i);
                findPermutations(included);
                if (res) return;
                included.delete(i);
            }
        }
    }

    findPermutations(new Set());

    return res;
};
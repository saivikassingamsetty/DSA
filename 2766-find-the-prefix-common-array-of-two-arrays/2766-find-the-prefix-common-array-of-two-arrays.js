/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let set = new Set();
    res = 0;
    let ans = [];

    for (let i = 0; i < A.length; i++) {
        if (!set.has(A[i])) set.add(A[i])
        else res++;
        if (!set.has(B[i])) set.add(B[i])
        else res++;
        ans.push(res);
    }

    return ans;
};
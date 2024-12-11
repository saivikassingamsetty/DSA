/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let depth = 0;
    let res = Array.from({length: seq.length}, (x) => 0);

    for (let i=0; i<seq.length; i++) {
        if (seq[i] == '(') depth++;
        res[i] = depth%2 == 0 ? 1 : 0;
        if (seq[i] == ')') depth--;
    }

    return res;
};
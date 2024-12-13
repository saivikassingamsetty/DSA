/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = [];

    for (let op of operations){
        if (op == 'C') {
            res.pop();
        } else if (op == 'D') {
            if (!res.length) continue;
            res.push(res[res.length-1] * 2);
        } else if (op == "+") {
            if (res.length < 2) continue;
            res.push(res[res.length-1] + res[res.length-2]);
        } else {
            res.push(+op);
        }
    }

    return res.reduce((t,v) => t + v, 0);
};
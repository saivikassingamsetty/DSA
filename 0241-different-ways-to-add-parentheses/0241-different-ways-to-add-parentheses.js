/**
 * @param {string} expression
 * @return {number[]}
 */

const isNum = (val) => {
    return !isNaN(parseInt(val)) && isFinite(val);
}

var diffWaysToCompute = function (expression) {
    let res = [];

    if (!expression) return res;

    if (expression.length <= 2 && isNum(expression)) return [parseInt(expression)];

    for (let i = 0; i < expression.length; i++) {
        if (isNum(expression[i])) continue;

        let leftRes = diffWaysToCompute(expression.slice(0, i));
        let rightRes = diffWaysToCompute(expression.slice(i + 1));

        for (let left of leftRes) {
            for (let right of rightRes) {
                if (expression[i] == '*') {
                    res.push(left * right)
                } else if (expression[i] == '+') {
                    res.push(left + right)
                } else {
                    res.push(left - right)
                }
            }
        }
    }

    return res;
};
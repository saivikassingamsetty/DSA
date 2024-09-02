/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let numS = Array.from(num.toString()).sort((a,b) => a-b);
    let num1 = num2 = 0;

    for (let [i, ch] of Object.entries(numS)) {
        if (i%2 == 0) num1 = 10*num1 + +ch;
        else num2 = 10*num2 + +ch;
    }

    return num1 + num2;
};
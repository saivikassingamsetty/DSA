/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let temp = n;
    let temp2;
    let visited = new Set();

    while (true) {
        if (visited.has(temp)) return false;
        if (temp == 1) return true;
        visited.add(temp);
        temp2 = 0;
        while (temp > 0) {
            temp2 += (temp % 10) ** 2;
            temp = Math.floor(temp / 10);
        }
        temp = temp2;
    }
};
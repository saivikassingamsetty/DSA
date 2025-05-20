/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fives = 0;
    let tens = 0;

    for (let bill of bills) {
        if (bill == 5) fives++
        else if (bill == 10) {
            tens++;
            if (fives > 0) fives--
            else return false
        } else {
            let diff = 15;
            while (tens > 0 && diff >= 10) {
                diff -= 10;
                tens--;
            }
            while (fives > 0 && diff >= 5) {
                diff -= 5;
                fives--;
            }
            if (diff) return false;
        }
    }

    return true;
};
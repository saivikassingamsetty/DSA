/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let track = new Map();
    let min = 10000;
    let res = [];

    list1.forEach((item, index) => (!track.has(item)) ? track.set(item, index): null);
    list2.forEach((item, index) => {
        if (track.has(item)) {
            let temp = index + track.get(item);
            if (temp < min) {
                min = temp;
                res = [item];
            } else if (temp == min) {
                res.push(item);
            }
        }
    });

    return res;
};
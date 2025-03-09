/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let placed = 0;
    let visited = new Set();

    for (let fruitQuantity of fruits) {
        for (let i = 0; i < baskets.length; i++) {
            if (!visited.has(i) && baskets[i] >= fruitQuantity) {
                visited.add(i);
                placed++;
                break;
            }
        }
    }

    return fruits.length - placed;
};

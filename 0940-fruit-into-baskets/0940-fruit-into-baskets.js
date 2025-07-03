/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let start = 0;
    let res = 0;
    let unique = new Set();
    let lastIndexMap = new Map();

    for (let end = 0; end < fruits.length; end++) {
        unique.add(fruits[end]);
        lastIndexMap.set(fruits[end], end);

        while (unique.size > 2 && start < end) {
            let toBeRemovedFruitIndex = end;

            for (let [fruit, lastId] of lastIndexMap) {
                if (lastId < toBeRemovedFruitIndex) toBeRemovedFruitIndex = lastId;
            }

            unique.delete(fruits[toBeRemovedFruitIndex]);
            start = lastIndexMap.get(fruits[toBeRemovedFruitIndex]) + 1;
            lastIndexMap.delete(fruits[toBeRemovedFruitIndex]);
        };

        res = Math.max(res, end - start + 1);
    }

    return res;
};
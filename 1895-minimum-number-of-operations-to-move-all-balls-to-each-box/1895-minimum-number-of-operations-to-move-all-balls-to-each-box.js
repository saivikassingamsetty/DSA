/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    //0 1 3 left
    //1 0 0 right
    //1 1 3 total

    leftOps = [];
    rightOps = [];

    //populate min ops from left
    let leftCount = 0;
    let lastCount = 0;
    for (let box of boxes) {
        //min Ops
        leftOps.push(leftCount);

        if (box == '1') {
            //increase balls count
            lastCount++;
        }

        //move all boxes from one box to right box
        leftCount += lastCount;
    }

    //populate the min ops from right
    let rightCount = 0;
    let lastRightCount = 0;
    for (let i=boxes.length-1; i>=0; i--) {
        //min Ops
        rightOps.push(rightCount);

        if (boxes[i] == '1') {
            //increase balls count
            lastRightCount++;
        }

        //move all boxes from one box to left box
        rightCount += lastRightCount;
    }
    rightOps.reverse();

    //add both and return
    return leftOps.map((item, index) => item + rightOps[index]);
};
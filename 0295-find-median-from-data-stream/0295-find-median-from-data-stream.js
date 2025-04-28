
var MedianFinder = function () {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let left = 0;
    let right = this.list.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.list[mid] < num) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    this.list.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let mid = Math.floor(this.list.length / 2);
    if (this.list.length % 2) {
        return this.list[mid];
    } else {
        return (this.list[mid] + this.list[mid - 1]) / 2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
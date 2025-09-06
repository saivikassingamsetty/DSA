
var StockSpanner = function () {
    this.real = [];
    this.lastPriceStack = [];
    this.lastConsecutiveDaysStack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    this.real.push(price);

    let count = 1;
    while (this.lastConsecutiveDaysStack.length && this.lastPriceStack[this.lastPriceStack.length - 1] <= price) {
        this.lastPriceStack.pop();
        count += this.lastConsecutiveDaysStack.pop();
    }

    this.lastPriceStack.push(price);
    this.lastConsecutiveDaysStack.push(count);

    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
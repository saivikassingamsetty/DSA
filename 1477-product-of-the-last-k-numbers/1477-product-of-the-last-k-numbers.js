
var ProductOfNumbers = function () {
    this.stream = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
    if (num == 0) this.stream = [1]
    else this.stream.push(num * this.stream[this.stream.length - 1]);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
    //excluding first 1
    if (this.stream.length - 1 < k) return 0;

    return this.stream[this.stream.length - 1] / this.stream[this.stream.length - k - 1];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
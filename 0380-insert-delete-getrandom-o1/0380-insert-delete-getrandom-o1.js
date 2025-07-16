
var RandomizedSet = function () {
    this.arr = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.map.has(val)) {
        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        let id = this.map.get(val);
        let lastVal = this.arr[this.arr.length - 1];
        this.map.set(lastVal, id);
        [this.arr[id], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[id]];
        this.arr.pop();
        this.map.delete(val);
        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let idx = Math.floor(Math.random() * this.arr.length);
    return this.arr[idx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
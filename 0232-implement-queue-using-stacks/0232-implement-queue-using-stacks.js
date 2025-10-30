
var MyQueue = function() {
    this.stack = [];
    this.stackReverse = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let itemToReturn;
    while (this.stack.length) {
        let elem = this.stack.pop();
        if (!this.stack.length) itemToReturn = elem;
        else this.stackReverse.push(elem);
    }

    while (this.stackReverse.length) {
        this.stack.push(this.stackReverse.pop());
    }

    return itemToReturn;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
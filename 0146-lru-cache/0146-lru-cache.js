class DoublyLinkedListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = {}; // key -> [node, value]
    this.head = null; // least recently used
    this.tail = null; // most recently used
    this.size = 0;
};

LRUCache.prototype._moveToTail = function(node) {
    if (node === this.tail) return; // already at end
    // Unlink node
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    if (node === this.head) this.head = node.next;
    // Place node at tail
    node.prev = this.tail;
    node.next = null;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node; // Only 1 node
};

LRUCache.prototype.get = function (key) {
    if (!(key in this.cache)) return -1;
    let [node, value] = this.cache[key];
    this._moveToTail(node);
    return value;
};

LRUCache.prototype.put = function (key, value) {
    if (key in this.cache) {
        let [node, _] = this.cache[key];
        this.cache[key][1] = value; // update value
        this._moveToTail(node);
    } else {
        if (this.size === this.capacity) {
            // evict head
            let oldKey = this.head.val;
            if (this.head.next) this.head.next.prev = null;
            this.head = this.head.next;
            delete this.cache[oldKey];
            this.size--;
        }
        // add new node at tail
        let node = new DoublyLinkedListNode(key);
        node.prev = this.tail;
        node.next = null;
        if (this.tail) this.tail.next = node;
        this.tail = node;
        if (!this.head) this.head = node;
        this.cache[key] = [node, value];
        this.size++;
    }
};

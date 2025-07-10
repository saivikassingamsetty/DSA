// Doubly Linked List Node
class DLLNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List with dummy head/tail
class DoublyLinkedList {
    constructor() {
        this.head = new DLLNode(); // dummy
        this.tail = new DLLNode(); // dummy
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    // add node before tail (most recent)
    append(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
        this.size++;
    }
    // remove node
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
    // remove, return least recently node (head.next)
    removeLRU() {
        if (this.size === 0) return null;
        let lru = this.head.next;
        this.remove(lru);
        return lru;
    }
    isEmpty() {
        return this.size === 0;
    }
}

var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};        // key -> node
    this.freqMap = {};      // freq -> DoublyLinkedList
    this.minFreq = 0;
};

LFUCache.prototype.get = function(key) {
    if (!this.cache[key]) return -1;
    let node = this.cache[key];
    this._updateNode(node);
    return node.value;
};

LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return;

    if (this.cache[key]) {
        // Update value & freq
        let node = this.cache[key];
        node.value = value;
        this._updateNode(node);
    } else {
        if (this.size === this.capacity) {
            // Evict least frequently used + LRU within that freq
            let dll = this.freqMap[this.minFreq];
            let lruNode = dll.removeLRU();
            delete this.cache[lruNode.key];
            this.size--;
        }
        // New node
        let node = new DLLNode(key, value);
        this.cache[key] = node;
        // Add to freq 1 list
        if (!this.freqMap[1]) this.freqMap[1] = new DoublyLinkedList();
        this.freqMap[1].append(node);
        this.minFreq = 1;
        this.size++;
    }
};

// Remove from old freq list, increment freq, add to new list
LFUCache.prototype._updateNode = function(node) {
    let oldFreq = node.freq;
    this.freqMap[oldFreq].remove(node);
    if (this.freqMap[oldFreq].isEmpty()) {
        delete this.freqMap[oldFreq];
        if (this.minFreq === oldFreq) this.minFreq++;
    }
    node.freq++;
    if (!this.freqMap[node.freq]) this.freqMap[node.freq] = new DoublyLinkedList();
    this.freqMap[node.freq].append(node);
};

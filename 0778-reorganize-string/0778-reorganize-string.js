var reorganizeString = function (s) {
    let freq = new Array(26).fill(0);
    for (let ch of s) freq[ch.charCodeAt(0) - 97]++;

    let max = Math.max(...freq);
    if (max > Math.ceil(s.length / 2)) return "";

    let pq = new PriorityQueue((a, b) => b[0] - a[0]);
    for (let i = 0; i < 26; i++) {
        if (freq[i]) pq.enqueue([freq[i], String.fromCharCode(97 + i)]);
    }

    let res = '';
    let prev = null;

    while (pq.size() > 0) {
        let [count, ch] = pq.dequeue();
        res += ch;
        count--;

        if (prev && prev[0] > 0) pq.enqueue(prev);
        prev = [count, ch];
    }

    if (prev && prev[0] > 0) return "";

    return res;
};

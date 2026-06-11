/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let [m, n] = [board.length, board[0].length];

    class TrieNode {
        constructor() {
            this.children = {};
            this.word = null;
        }
    }

    const buildTrie = (words) => {
        let root = new TrieNode();

        for (let word of words) {
            let temp = root;
            for (let ch of word) {
                if (!temp.children[ch]) temp.children[ch] = new TrieNode();
                temp = temp.children[ch];
            }
            temp.word = word;
        }
        return root;
    }

    const dfs = (i, j, node) => {
        let ch = board[i][j];
        node = node.children[ch];
        if (!node) return;

        if (node.word) {
            res.push(node.word);
            node.word = null; //to avoid duplicates
        }

        board[i][j] = "#";
        for (let [di, dj] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            let ni = i + di, nj = j + dj;
            if (ni >= 0 && nj >= 0 && ni < m && nj < n && board[ni][nj] !== "#") {
                dfs(ni, nj, node);
            }
        }
        board[i][j] = ch;
    }


    const root = buildTrie(words);
    let res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }

    return res;
};
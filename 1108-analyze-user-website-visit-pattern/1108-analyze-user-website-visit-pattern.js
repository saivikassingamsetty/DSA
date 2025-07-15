/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (usernames, timestamps, websites) {
    const n = usernames.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const username = usernames[i];
        const timestamp = timestamps[i];
        const website = websites[i];

        if (!map.has(username)) map.set(username, []);
        map.get(username).push([website, timestamp]);
    }

    const three_seqs = new Map();

    for (const [username, visited_sites] of map) {
        const temp = create_possible_three_sequences(visited_sites);

        for (const seq of temp) {
            if (!three_seqs.has(seq)) three_seqs.set(seq, 0);
            three_seqs.set(seq, three_seqs.get(seq) + 1);
        }
    }

    let max_user_count = 0;
    let res = "";

    for (const [seq, unique_user_count] of three_seqs) {
        if (unique_user_count > max_user_count) {
            max_user_count = unique_user_count;
            res = seq;
        }
        else if (unique_user_count === max_user_count) {
            if (seq < res) res = seq;
        }
    }

    return res.split("#");



    function create_possible_three_sequences(sites) {
        const n = sites.length;
        sites.sort((a, b) => a[1] - b[1]);

        const set = new Set();

        for (let i = 0; i < n - 2; i++) {
            const website1 = sites[i][0];

            for (let j = i + 1; j < n - 1; j++) {
                const website2 = sites[j][0];

                for (let k = j + 1; k < n; k++) {
                    const website3 = sites[k][0];

                    const seq = website1 + "#" + website2 + "#" + website3;

                    set.add(seq);
                }
            }
        }

        return set;
    }
}; 
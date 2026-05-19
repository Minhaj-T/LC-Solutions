/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    let vovels = ["a", "e", "i", "o", "u"];
    let maxv = 0, maxc = 0;

    for (let key in map) {

        if (vovels.includes(key)) {
            if (maxv < map[key]) {
                maxv = map[key];
            }
        } else {
            if (maxc < map[key]) {
                maxc = map[key];
            }
        }

    }

    return maxv + maxc;
};
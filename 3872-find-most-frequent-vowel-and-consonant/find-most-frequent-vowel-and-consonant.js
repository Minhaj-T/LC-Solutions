/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {

    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    let maxVowels = 0, maxConsonent = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let mapKeys = Object.keys(map)

    for (let j = 0; j < mapKeys.length; j++) {
        if (vowels.includes(mapKeys[j])) {
            if (maxVowels < map[mapKeys[j]]) {
                maxVowels = map[mapKeys[j]]
            }
        } else {
            if (maxConsonent < map[mapKeys[j]]) {
                maxConsonent = map[mapKeys[j]];
            }
        }
    }
    return maxVowels + maxConsonent;

};
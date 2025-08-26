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

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (maxVowel < map[s[i]]) {
                maxVowel = map[s[i]]
            }
        } else {
            if (maxConsonant < map[s[i]]) {
                maxConsonant = map[s[i]]
            }

        }
    }

    return maxConsonant + maxVowel;

};
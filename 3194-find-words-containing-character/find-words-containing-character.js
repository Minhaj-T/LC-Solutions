/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let out = [];
    for (let i = 0; i < words.length; i++) {
        let char = words[i];

        for (let j = 0; j < char.length; j++) {
            if (char[j] === x) {
                out.push(i);
                break;
            }
        }
    }
    return out;

};
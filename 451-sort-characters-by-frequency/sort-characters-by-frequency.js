/**
 * @param {string} str
 * @return {string}
 */
var frequencySort = function (str) {
    const map = {};

    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1;
        } else {
            map[str[i]]++;
        }

    }
    const arr = Object.entries(map);

    const sorted = arr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

    let result = "";


    for (let [char, count] of sorted) {
        result += char.repeat(count);
    }

    return result;

};
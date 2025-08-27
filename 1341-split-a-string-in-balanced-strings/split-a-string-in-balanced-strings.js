/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let temp = 0;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        temp = s[i] === "R" ? ++temp : --temp;

        if (!temp) {
            count++;
        }
    }
    return count;

};
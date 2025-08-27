/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let countR = 0;
    let countL = 0;
    let balCount = 0;

    for (let i = 0; i < s.length; i++) {
        countR = s[i] === "R" ? ++countR : countR;
        countL = s[i] === "L" ? ++countL : countL;

        if (countR === countL) {
            balCount++;
            countR = 0;
            countL = 0;
        }
    }
    return balCount;

};
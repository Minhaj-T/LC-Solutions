/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let n = num.length - 1;
    for (let i = n; i >= 0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            return num.slice(0, i + 1)
        }

    }
    return "";
};
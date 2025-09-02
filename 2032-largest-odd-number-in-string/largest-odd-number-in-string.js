/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (s) {
    // let n = s.length - 1;
    // while (n >= 0) {
    //     if (Number(s[n]) % 2 == 1) {
    //         return s.substring(0, n + 1)
    //     } else {
    //         --n
    //     }
    // }

    for (let i = s.length - 1; i >= 0; i--) {
        if (Number(s[i]) % 2 == 1) {
            return s.substring(0, i + 1)
        }
    }
    return "";


};
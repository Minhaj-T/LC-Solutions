/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (s) {

    for (let i = s.length; i >= 0; i--) {

        if (s[i] % 2 == 1) {
            return s.substring(0, i + 1)
        }

    }
    return ""

};
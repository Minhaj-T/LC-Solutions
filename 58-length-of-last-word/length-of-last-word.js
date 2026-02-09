/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let n = s.length - 1;

    while (n >= 0) {
        if (s[n] !== " ") {
            break;
        }
        n--;
    }

    let count = 0;
    for (let i = n; i >= 0; i--) {

        if (s[i] === " ") {
            break;
        }
        count++;

    }


    return count;

};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let n = s.length - 1; // start from last char
    let count = 0;

    // trim all the last spaces at the end.
    while (n >= 0) {
        if (s[n] !== " ") {
            break;
        }
        n--;
    };
    // n is the word where my last word starts

    // count the carecters till you reach a space;
    for (let i = n; i >= 0; i--) {
        if (s[i] === " ") {
            break;
        }
        count++;
    }
    return count;

};
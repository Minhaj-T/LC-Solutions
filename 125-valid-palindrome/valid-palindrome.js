/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function (s) {

    s = s.toLowerCase();
    let l = 0, r = s.length - 1;

    while (l < r) {

        if (!s[l].match(/[a-z0-9]/i)) {
            ++l;

        } else if (!s[r].match(/[a-z0-9]/i)) {
            --r;

        } else if (s[l] === s[r]) {
            ++l;
            --r;
        } else {
            return false;
        }

    }

    return true;

}
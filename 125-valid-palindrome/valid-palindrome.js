/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    //filterd value

    let filterdString = '';
    s = s.toLowerCase();
    let rev = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filterdString = filterdString + s[i];
            rev = s[i] + rev;
        }
    }
    return rev === filterdString;


};
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let res = [0, 1]

    for (let i = 2; i < n + 1; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n]

};
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}
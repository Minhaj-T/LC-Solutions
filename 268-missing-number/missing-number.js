/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (arr) {
    let n = arr.length;
    let totelSum = Math.floor(n * (n + 1) / 2);
    let arrSum = 0
    for (let i = 0; i < arr.length; i++) {
        arrSum = arr[i] + arrSum;
    }

    return totelSum - arrSum;


}

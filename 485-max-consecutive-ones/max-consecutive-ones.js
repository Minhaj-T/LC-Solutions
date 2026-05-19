/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (arr) {
    let currCount = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 1) {
            currCount++;
        } else {
            if (currCount > maxCount) {
                maxCount = currCount;
            }
            currCount = 0;
        }

    }

    return currCount < maxCount ? maxCount : currCount;



};
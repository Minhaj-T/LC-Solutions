/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    let maxCount = 0;
    let currCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currCount++;

        } else {
            if (maxCount < currCount) {
                maxCount = currCount
            }
            currCount = 0;
        }
    }

    return maxCount < currCount ? currCount : maxCount

};
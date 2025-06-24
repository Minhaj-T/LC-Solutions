/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var currCount = 0;
    var maxcount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currCount++
        } else {
            maxcount = Math.max(currCount, maxcount)
            currCount = 0;

        }


    };
    return Math.max(maxcount, currCount)
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var currentCount = 0;
    var maxcount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currentCount++
        } else (
            currentCount = 0
        )
        if (maxcount < currentCount) {
            maxcount = currentCount
        }
    };
    return maxcount
};
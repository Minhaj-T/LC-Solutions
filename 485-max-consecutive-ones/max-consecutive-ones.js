/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) { 
    var cons = 0;
    var high = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            cons = cons + 1
        } else (
            cons = 0
        )
        if (high < cons) {
            high = cons
        }
    };
    return high
};
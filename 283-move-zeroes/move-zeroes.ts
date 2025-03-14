/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const zeroCount = nums.filter(num => num === 0).length; 
    const nonZeroElements = nums.filter(num => num !== 0);
    
    nums.length = 0; 
    nums.push(...nonZeroElements, ...Array(zeroCount).fill(0));
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let nums1Cpy = nums1.slice(0, m);
    let p1 = 0, p2 = 0;

    for (let i = 0; i < n + m; i++) {
        if ((nums1Cpy[p1] < nums2[p2] && p1 < m) || p2 >= n) {
            nums1[i] = nums1Cpy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;

        }

    }

};
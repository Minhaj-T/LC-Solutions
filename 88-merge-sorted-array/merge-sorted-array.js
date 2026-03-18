/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let cpyNum1 = nums1.slice(0, m);

    let p1=0, p2 = 0;

    for (let i = 0; i < m + n; i++) {

        if ((cpyNum1[p1] < nums2[p2] && p1 < m) || p2>=n ) {
            nums1[i] = cpyNum1[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }


    }

    return nums1;


};
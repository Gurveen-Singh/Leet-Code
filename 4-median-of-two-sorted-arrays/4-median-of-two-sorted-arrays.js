/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    let res = nums1.concat(nums2);
    res.sort((a, b) => a - b);
    let n = res.length;
    let m = n >> 1;
    return n & 1 ? res[m] : (res[m - 1] + res[m]) / 2;
};
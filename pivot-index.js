/**
 * Returns the pivot index where the sum of elements on the left equals the sum of elements on the right.
 * @param {number[]} nums - The input array.
 * @returns {number} - The pivot index or -1 if no pivot index exists.
 */

function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
}
/*
// Examples
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Should return 3
console.log(pivotIndex([1, 2, 3]));            // Should return -1
console.log(pivotIndex([2, 1, -1]));           // Should return 0
*/
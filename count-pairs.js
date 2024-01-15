/**
 * Returns the total number of pairs that sum to the target.
 * @param {number[]} arr - The input array.
 * @param {number} target - The target sum.
 * @returns {number} - The total number of pairs.
 */
function countPairs(arr, target) {
    let count = 0;
    let seen = new Set();

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            count++;
        }
        seen.add(num);
    }

    return count;
}
/*
// Examples
console.log(countPairs([1, 2, 3, 4, 5], 6));  // Should return 2
console.log(countPairs([1, 2, 3, 4, 5], 10)); // Should return 0
console.log(countPairs([1, 2, 3, 4, 5], 7));  // Should return 2
console.log(countPairs([1, 2, 3, 4, 5], 2));  // Should return 1
console.log(countPairs([], 5));                // Should return 0
*/

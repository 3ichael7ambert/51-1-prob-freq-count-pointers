/**
 * Returns the length of the longest consecutive streak of decreasing integers in the array.
 * @param {number[]} arr - The input array.
 * @returns {number} - The length of the longest fall.
 */
function longestFall(arr) {
    if (arr.length === 0) return 0;

    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else {
            currentStreak = 1;
        }
    }

    return longestStreak;
}
/*
// Examples
console.log(longestFall([5, 3, 1, 3, 0]));   // Should return 3
console.log(longestFall([2, 2, 1]));          // Should return 2
console.log(longestFall([2, 2, 2, 2]));       // Should return 1
console.log(longestFall([]));                 // Should return 0
*/

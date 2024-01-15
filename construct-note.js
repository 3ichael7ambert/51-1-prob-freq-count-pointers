function constructNote(message, letters) {
    const letterCount = {};

    // Count the occurrences of each letter in letters
    for (let letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Check if there are enough letters for each character in the message
    for (let char of message) {
        if (!letterCount[char] || letterCount[char] === 0) {
            return false;
        } else {
            letterCount[char]--;
        }
    }

    return true;
}

/*
// Examples
console.log(constructNote('aa', 'abc'));        // false
console.log(constructNote('abc', 'dcba'));      // true
console.log(constructNote('aabbcc', 'bcabcaddff'));  // true
*/

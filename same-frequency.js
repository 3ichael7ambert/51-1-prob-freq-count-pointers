function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) {
        return false;
    }

    const frequencyCounter = {};

    for (let digit of strNum1) {
        frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
    }

    for (let digit of strNum2) {
        if (!frequencyCounter[digit]) {
            return false;
        } else {
            frequencyCounter[digit]--;
        }
    }

    return true;
}
/*
// Examples
console.log(sameFrequency(182, 281));       // true
console.log(sameFrequency(34, 14));         // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222));        // false
*/
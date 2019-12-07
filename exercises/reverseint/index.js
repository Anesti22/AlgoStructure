// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;



//#3
// function reverseInt(n) {
//     const reverseInt = 500;
//     return parseInt(reverseInt.toString().split('').reverse().join(''));
// }


// #2
// function reverseInt(n) {
//     const reverseInt = 981;
//     return parseInt(reverseInt.toString().split('').reverse().join(''));
// }


// #1
// function reverseInt(n) {
//     const reverseInt = 15;
//     return parseInt(reverseInt.toString().split('').reverse().join(''));
// }

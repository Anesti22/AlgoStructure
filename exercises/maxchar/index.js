// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charOb = {};
    let max = 0;
    let maxChar = '';

    for(let char of str ) {
        if(charOb[char]) {
            charOb[char] ++;
        } else {
            charOb[char] = 1;
        }
    }

    for(let char in charOb) {
        if(charOb[char] > max) {
            max = charOb[char];
            maxChar = char
        }
    }

    return maxChar;
}

module.exports = maxChar;


// // #1
// function maxChar(str) {
//     const charOb = {};

//     for(let char of str ) {
//         charOb[char] = charOb[char] + 1 || 1
//     }
// }

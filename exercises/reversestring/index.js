// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    let reversed = '';

    for(let character of str ) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;
}


// #1
// function reverse(str) {
//     // Turn 'str' into a array
//     const arr = str.split('');

//     // Call 'reverse' method on that array
//     arr.reverse();

//     // Join the array back into a string & Return the result
//     return arr.join('');


// alt.. solution

// function reverse(str) {
//     return str.split('').reverse().join('');
// }


// #2
//function reverse(str) {
//     let reversed = '';

//     for(let character of str ) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }


// #3
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

// reverse('asdf');

module.exports = reverse;


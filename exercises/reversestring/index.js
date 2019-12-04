// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Turn 'str' into a array
    const arr = str.split('');

    // Call 'reverse' method on that array
    arr.reverse();

    // Join the array back into a string & Return the result
    return arr.join('');

}

reverse('Hello')

module.exports = reverse;


// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // We use split to convert the string in an array
    const arr = str.split('');

    // Then we reverse
    arr.reverse();

    // And ten join that again in a string
    arr.join('');

    // After that we return the arr.join('')
    return arr.join('');
}

module.exports = reverse;


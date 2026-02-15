
// Solution 1
function allSameCase(word) {

    if (word == word.toUpperCase() || word == word.toLowerCase()) {
        return true;
    }
    return false;
}


// Solution 2
function allSameCase(word) {

    return (word == word.toUpperCase() || word == word.toLowerCase());
}


///// TEST 1 /////
// Inputs
word = 'hello'

// Outputs
console.log(allSameCase(word)) // true


///// TEST 2 /////
// Inputs
word = 'Hello'

// Outputs
console.log(allSameCase(word)) // false


///// TEST 3 /////
// Inputs
word = 'HI'

// Outputs
console.log(allSameCase(word)) // true


///// TEST 4 /////
// Inputs
word = 'a'

// Outputs
console.log(allSameCase(word)) // true


// First Solution
function allSameCase(word) {

    if (word == word.toUpperCase()) {
        return true;
    }
    else if (word == word.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

// Second Solution
function allSameCase(word) {

   return (word == word.toUpperCase() || word == word.toLowerCase());

}


// --------------------
// Test 1
//     Inputs
//         word = 'hello'
//     outputs
//         true
// --------------------
// Test 2
//     Inputs
//         word = 'Hello'
//     outputs
//         false
// --------------------
// Test 3
//     Inputs
//         word = 'HI'
//     outputs
//         true
// --------------------
// Test 4
//     Inputs
//         word = 'a'
//     outputs
//         true
// --------------------
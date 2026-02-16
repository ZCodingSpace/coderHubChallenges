
// Solution 1
function returnStringLetters(string1, string2) {
    
    if (string1.length >= string2.length) {
        return string1.length;
    }
    return string2.length;
}


// Solution 2
function returnStringLetters(string1, string2) {

    return Math.max(string1.length, string2.length);
}


///// TEST 1 /////
// Inputs
string1 = 'Ahmad'
string2 = 'Mohammad'

// Outputs
console.log(returnStringLetters(string1, string2)) // 8


///// TEST 2 /////
// Inputs
string1 = 'Khalid'
string2 = 'Asma'

// Outputs
console.log(returnStringLetters(string1, string2)) // 6


///// TEST 3 /////
// Inputs
string1 = 'Osama'
string2 = 'Hassan'

// Outputs
console.log(returnStringLetters(string1, string2)) // 6


///// TEST 4 /////
// Inputs
string1 = 'Ali'
string2 = 'Nasser'

// Outputs
console.log(returnStringLetters(string1, string2)) // 6

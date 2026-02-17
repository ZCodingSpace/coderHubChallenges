
function isMirrored(num) {

    let reversed = Number(num.toString().split("").reverse().join(""));

    return num == reversed;
}


///// TEST 1 /////
// Inputs
num = 11

// Outputs
console.log(isMirrored(num)); // true


///// TEST 2 /////
// Inputs
num = 191

// Outputs
console.log(isMirrored(num)); // true


///// TEST 3 /////
// Inputs
num = 112

// Outputs
console.log(isMirrored(num)); // false


///// TEST 4 /////
// Inputs
num = 16461

// Outputs
console.log(isMirrored(num)); // true